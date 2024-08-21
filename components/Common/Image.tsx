import Image from 'next/image';
import Link from 'next/link';

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
  href = '',
  ...props
}: Props) {
  if (caption) {
    console.log(
      `%c Caption: ==================================`,
      'color: red; font-size: 30px'
    );
    console.log(`%c "${caption}"`, 'font-size: 35px; color: #00f');
  }

  const image = (
    <div className="h-full relative">
      <Image src={src} objectFit="contain" fill alt={alt} {...props} />
    </div>
  );
  return (
    <div className="image-grid">
      {href ? <Link href={href}>{image}</Link> : image}
      {caption && (
        <div className="h-10">
          <p className=" text-gray-500 mt-3">
            <em>{caption}</em>
          </p>
        </div>
      )}
    </div>
  );
}
