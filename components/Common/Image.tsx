import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  caption?: string | null;
}

export default function CustomImage({
  src,
  alt,
  fill = true,
  caption = null,
  ...props
}: Props) {
  return (
    <div className="flex justify-center col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full relative">
      <Image src={src} fill objectFit="contain" alt={alt} {...props} />
      {caption && (
        <p className="absolute bottom-0 text-gray-500">
          <em>{caption}</em>
        </p>
      )}
    </div>
  );
}
