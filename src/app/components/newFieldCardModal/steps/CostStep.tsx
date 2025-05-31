import Checkbox from "app/components/checkbox/Checkbox";
import { FieldCardFormData } from "types/FieldCard";

export default function CostStep({
  answers,
  setAnswers,
}: {
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Checkbox
        label="Paying for seeds?"
        id="seeds"
        checked={answers.paysForSeeds}
        onChange={() =>
          setAnswers((prev) => ({
            ...prev,
            paysForSeeds: !prev.paysForSeeds,
          }))
        }
      />
      <Checkbox
        id="fertilizer"
        label="  Paying for Fertilizer?"
        checked={answers.paysForFertilizer}
        onChange={() =>
          setAnswers((prev) => ({
            ...prev,
            paysForFertilizer: !prev.paysForFertilizer,
          }))
        }
      />
    </div>
  );
}
