"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
    href?: string;
    delay?: number;
}

export default function AutoRedirect({ href = "/deblackboxing/conclusion", delay = 0 }: Props) {
    const router = useRouter();

    useEffect(() => {
        const t = setTimeout(() => {
            router.push(href);
        }, delay);
        return () => clearTimeout(t);
    }, [href, delay, router]);

    return null;
}
