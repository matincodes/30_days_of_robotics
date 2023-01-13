export default function numberToPlace (number: number): string {
  let numberValue = number.toString();
  let lastNumber = numberValue.slice(-1);
  let lastTwo = numberValue.slice(-2);

  let append =
    lastNumber == "1" && lastTwo != "11"
      ? "st"
      : lastNumber == "2" && lastTwo != "12"
      ? "nd"
      : lastNumber == "3" && lastTwo != "13"
      ? "rd"
      : "th";

  return numberValue + append;
}
