import Image from "next/image";
interface Props {
  size?: number;
}

function Logo({ size = 80 }: Props) {
  return (
    <div className="flex  items-center gap-2">
      <Image
        src="/main.png"
        alt="30 Days of Robotics Logo"
        width={size}
        height={size}
      />
      <p>
        <span> 30 Days of</span> <br />{" "}
        <span className="text-xl font-bold uppercase">Robotics</span>
      </p>
    </div>
  );
}

export default Logo;
