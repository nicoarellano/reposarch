import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  caption?: string | null;
  href?: string;
}

export default function CustomImage({
  src,
  alt,
  fill = true,
  caption = null,
  href = "",
  ...props
}: Props) {
  return (
    <>
      <div className="flex justify-center col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full relative">
        {href ? (
          <Link href={href}>
            <Image src={src} fill objectFit="contain" alt={alt} {...props} />
          </Link>
        ) : (
          <Image src={src} fill objectFit="contain" alt={alt} {...props} />
        )}
      </div>
      {caption && (
        <p className="relative bottom-0 text-gray-500 mt-3">
          <em>{caption}</em>
        </p>
      )}
    </>
  );
}
