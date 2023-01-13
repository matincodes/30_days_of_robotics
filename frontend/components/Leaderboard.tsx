import Image from "next/image";
import { default as DivImage } from "./Image";

type Props = {
  variant: "list" | "scroll";
  className?: string;
  title?: boolean;
};

type player = {
  id: string | number;
  name: string;
  avatar: string;
  points: number;
};
/* use `interface` if exporting so that consumers can extend */

const getLeaderboard = (): player[] | null => {
  return [
    {
      id: 1,
      name: "Nakamura",
      avatar: "/avatar.png",
      points: 10000,
    },
    {
      id: 2,
      name: "Lithmus",
      avatar: "/avatar.png",
      points: 9000,
    },
    {
      id: 3,
      name: "Zang",
      avatar: "/avatar.png",
      points: 8000,
    },
    {
      id: 4,
      name: "BlessTheBoy",
      avatar: "/avatar.png",
      points: 7000,
    },
    {
      id: 5,
      name: "Tholarni",
      avatar: "/avatar.png",
      points: 6000,
    },
    {
      id: 6,
      name: "Joshephine",
      avatar: "/avatar.png",
      points: 5000,
    },
    {
      id: 7,
      name: "Olakunle",
      avatar: "/avatar.png",
      points: 4000,
    },
    {
      id: 8,
      name: "Abdulmatin",
      avatar: "/avatar.png",
      points: 3000,
    },
    {
      id: 9,
      name: "Ridwan",
      avatar: "/avatar.png",
      points: 2000,
    },
    {
      id: 10,
      name: "Mr. Action",
      avatar: "/avatar.png",
      points: 1000,
    },
  ];
};

const Leaderboard = ({ variant, className, title = true }: Props) => {
  const leaderboard = getLeaderboard();

  if (!leaderboard || leaderboard.length === 0) {
    return (
      <div className={className}>
        <h2 className="font-semibold text-2xl text-[#AEAEAE] py-[10px] px-3 lg:px-5">
          Leaderboard
        </h2>
        <p className="text-[#DC2B12] text-2xl font-medium px-3 lg:px-5">
          Not available
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h2 className="font-semibold text-2xl text-[#AEAEAE] py-[10px] px-3 lg:px-5">
          Leaderboard
        </h2>
      )}
      {variant === "list" ? (
        <div className="grid gap-2 px-[10px] lg:px-5">
          {leaderboard.map((player, index) => (
            <ListItem player={player} position={index + 1} key={index} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-scroll  px-[10px] lg:px-5 no-scrollbar">
          <div className="flex py-[14px]  border border-[#45E3C6] rounded bg-[#EEFDFA] w-fit">
            {leaderboard.map((player, index) => (
              <ScrollItem
                player={player}
                position={index + 1}
                key={player.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;

type ItemProps = {
  player: player;
  position: number;
};
/* use `interface` if exporting so that consumers can extend */

const ListItem = ({ player, position }: ItemProps) => {
  return (
    <div className="text-teal font-semibold text-base leading-4 flex justify-between items-center bg-[#FAFEE7] border border-[#BFD059] rounded-lg p-[14px] w-full">
      <span>{position}.</span>
      <div className="flex items-center gap-2">
        <Image
          src={player.avatar}
          alt={`${player.name} avatar`}
          height={40}
          width={40}
          className="hidden lg:block rounded-full overflow-hidden"
        />
        <span>{player.name}</span>
      </div>
      <span>{player.points}</span>
    </div>
  );
};

const ScrollItem = ({ player, position }: ItemProps) => {
  return (
    <div className="px-3 border-r border-teal last:border-none lg:px-4">
      <DivImage
        src={player.avatar}
        alt={`${player.name} avatar`}
        // height={170}
        // width={170}
        className="rounded-full overflow-hidden w-[120px] h-[120px] lg:w-[170px] lg:h-[170px]"
      />
      <div className="text-center font-semibold text-sm mt-3 lg:text-base">
        <span className="pr-1">{position}.</span>
        <span>{player.name}</span>
      </div>
      <div className="text-center text-sm font-light lg:text-base">
        {player.points.toLocaleString()}
      </div>
    </div>
  );
};
