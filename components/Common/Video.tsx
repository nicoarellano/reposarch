interface Props {
  src: string;
  title: string;
  caption?: string | null;
}

export default function Video({ src, title, caption = null, ...props }: Props) {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src={`${src}&&autoplay=1&&loop=1`}
        title={title}
        allow="accelerometer; autoplay; loop"
        allowFullScreen
        {...props}
      ></iframe>
      {caption && (
        <p className="relative bottom-0 text-gray-500 mt-3">
          <em>{caption}</em>
        </p>
      )}
    </>
  );
}
