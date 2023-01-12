type Props = {
  src: string;
  alt: string;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const Image = ({ src, alt, className }: Props) => {
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover relative fill-[#BBBBBB] bg-[#BBBBBB] shrink-0 ${
        className ? className : ""
      }`}
      role="img"
      aria-label={alt}
      title={alt}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    ></div>
  );
};

export default Image;
