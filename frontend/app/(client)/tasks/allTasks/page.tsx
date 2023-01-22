import Tasks from "../../../../components/Tasks";

export const dynamic = "force-dynamic";

export default function AllTasks() {
  return (
    <div className="py-4 lg:py-8">
      {/* @ts-ignore */}
      <Tasks variant="grid" />
    </div>
  );
}
