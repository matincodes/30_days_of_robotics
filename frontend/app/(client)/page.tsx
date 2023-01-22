import Leaderboard from "../../components/Leaderboard";
import Tasks from "../../components/Tasks";


export default function HomePage() {
  return (
    <div className="py-4 lg:py-8">
      <h2 className="hidden lg:block px-5 mb-1 text-[#AEAEAE] text-4xl font-semibold">
        Home
      </h2>

      {/* @ts-ignore */}
      <Leaderboard variant="scroll" className="mb-4 lg:mb-6" />
      {/* @ts-ignore */}
      <Tasks variant="list" />
    </div>
  );
}
