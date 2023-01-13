import Link from "next/link";
import Lock from "./Icons/Lock";

type Props = {
  variant: "list" | "grid";
  className?: string;
};

interface taskItem {
  id: string | number;
  day: number;
  title: string;
  unlocked: boolean;
}
/* use `interface` if exporting so that consumers can extend */

const getTasks = (): taskItem[] | null => {
  return [
    {
      id: 1,
      day: 1,
      title: "Robotic arm Configuration",
      unlocked: true,
    },
    {
      id: 2,
      day: 2,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 3,
      day: 3,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 4,
      day: 4,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 5,
      day: 5,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 6,
      day: 6,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 7,
      day: 7,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 8,
      day: 8,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 9,
      day: 9,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 10,
      day: 10,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 11,
      day: 11,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 12,
      day: 12,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 13,
      day: 13,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 14,
      day: 14,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 15,
      day: 15,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 16,
      day: 16,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 17,
      day: 17,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 18,
      day: 18,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 19,
      day: 19,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 20,
      day: 20,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 21,
      day: 21,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 22,
      day: 22,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 23,
      day: 23,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 24,
      day: 24,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 25,
      day: 25,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 26,
      day: 26,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 27,
      day: 27,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 28,
      day: 28,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 29,
      day: 29,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
    {
      id: 30,
      day: 30,
      title: "Robotic leg Configuration",
      unlocked: false,
    },
  ];
};

const Tasks = ({ variant, className }: Props) => {
  const tasks = getTasks();

  if (!tasks || tasks.length === 0) {
    return (
      <div className={className}>
        <h2 className="font-semibold text-2xl text-[#AEAEAE] py-[10px] px-3 lg:px-5">
          Tasks
        </h2>
        <p className="text-[#DC2B12] text-2xl font-medium px-3 lg:px-5">
          Not available
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h2 className="font-semibold text-2xl text-[#AEAEAE] py-[10px] px-3 lg:px-5">
        Tasks
      </h2>
      {variant === "list" ? (
        <div className="grid gap-3 px-[10px] lg:px-5">
          {tasks.map((task) => (
            <ListItem task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <div className="grid gap-2 px-[10px] lg:px-5">
          {tasks.map((task) => (
            <GridItem task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;

const ListItem = ({ task }: { task: taskItem }) => {
  return task.unlocked ? (
    <Link href={`/tasks/${task.id}`}>
      <div
        className="px-2 py-5 flex items-center rounded-lg gap-4"
        style={{
          background:
            "linear-gradient(105.1deg, #2CE2C2 -17.57%, #1F7B6B 169.54%)",
        }}
      >
        <div className="grow flex gap-4 items-center lg:items-start lg:flex-col lg:gap-1 ">
          <p className="font-semibold leading-6 text-2xl lg:text-4xl lg:leading-9 text-[#FFFBFB]">
            Day {task.day}
          </p>
          <p className="grow text-base leading-4 font-norma lg:text-2xl lg:leading-6 text-[#DDEB89]">
            {task.title}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="px-2 py-5 flex items-center rounded-lg gap-4 border border-[#7E7E7E] bg-[#F9F9F9] cursor-not-allowed">
      <div className="grow flex items-center lg:items-start gap-4 lg:flex-col lg:gap-1 ">
        <p className="font-semibold leading-6 text-2xl lg:text-4xl lg:leading-9 text-[#7E7E7E]">
          Day {task.day}
        </p>
        <p className="grow text-base leading-4 font-norma lg:text-2xl lg:leading-6 text-[#7E7E7E]">
          {task.title}
        </p>
      </div>
      <Lock className="fill-[#7E7E7E]" />
    </div>
  );
};

const GridItem = ({ task }: { task: taskItem }) => {
  return (
    <div>
      <div>
        <p>Day {task.day}</p>
        <p>{task.title}</p>
      </div>
      {!task.unlocked && <Lock />}
    </div>
  );
};
