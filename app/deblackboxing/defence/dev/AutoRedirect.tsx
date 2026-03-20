"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
    href?: string;
    delay?: number;
    automatic?: boolean;
}

export default function AutoRedirect({ href = "/deblackboxing/conclusion", delay = 0, automatic = true }: Props) {
    const router = useRouter();

    useEffect(() => {
        if (automatic) {
            const t = setTimeout(() => {
                router.push(href);
            }, delay);
            return () => clearTimeout(t);
        }
        window.addEventListener('keydown', onKey);
        window.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('click', onClick);
        };

        // when automatic is false, redirect on right-arrow key or spacebar
        function onKey(e: KeyboardEvent) {
            e.stopPropagation();
            const key = e.key || '';
            if (key === 'ArrowRight' || key === ' ' || e.code === 'Space') {
                router.push(href);
            }
        }

        // handle clicks on any "next" / right-arrow UI elements
        function onClick(e: MouseEvent) {
            e.stopPropagation();
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const el = target.closest('[data-action="next"], [data-direction="right"], .right-arrow, .next, [aria-label="Next"]');
            if (el) router.push(href);
        }

    }, [href, delay, automatic, router]);

    return null;
}
