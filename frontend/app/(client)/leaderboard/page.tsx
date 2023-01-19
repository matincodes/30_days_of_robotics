import { default as LeaderboardComponent } from "../../../components/Leaderboard";

export default function Leaderboard() {
  return (
    <div className="py-4 lg:py-8">
      {/* @ts-ignore */}
      <LeaderboardComponent variant="list" className="mb-4 lg:mb-6" />
    </div>
  );
}
