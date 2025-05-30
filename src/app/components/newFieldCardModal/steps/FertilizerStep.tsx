import Select from "app/components/select/Select";
import { FertilizerType, FieldCardFormData } from "../CreateFieldCardModal";

const fertilizerOptions = [
  "None",
  "Basic",
  "Quality",
  "Deluxe",
  "Speed-Gro",
  "Deluxe Speed-Gro",
  "Hyper Speed-Gro",
];

export default function FertilizerStep({
  answers,
  setAnswers,
}: {
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
}) {
  return (
    <Select
      id="fertilizerType"
      options={fertilizerOptions}
      value={answers.fertilizerType}
      onChange={(e) =>
        setAnswers((prev) => ({
          ...prev,
          fertilizerType: e.target.value as FertilizerType,
        }))
      }
    />
  );
}
