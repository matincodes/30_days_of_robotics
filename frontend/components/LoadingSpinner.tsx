import { default as LoadingSpinnerIcon } from "./Icons/LoadingSpinner";
export default function LoadingSpinner({
  width = "10%",
}: {
  width?: number | string;
}) {
  return (
    <div className="flex align-middle justify-center h-full overflow-hidden">
      <LoadingSpinnerIcon style={{ width }} />
    </div>
  );
}
