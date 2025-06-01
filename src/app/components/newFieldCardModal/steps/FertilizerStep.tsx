import Select from "app/components/select/Select";
import { FieldCardFormData } from "types/FieldCard";
import { fertilizers } from "@/data/fertilizers";

export default function FertilizerStep({
  answers,
  setAnswers,
}: {
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
}) {
  return (
    <Select
      id="fertilizer"
      options={fertilizers.map((f) => f.name)}
      value={answers.fertilizer.name}
      onChange={(e) => {
        const selected = fertilizers.find((f) => f.name === e.target.value);
        if (!selected) return;

        setAnswers((prev) => ({
          ...prev,
          fertilizer: selected,
          fertilizerCost: selected.price ?? null,
        }));
      }}
    />
  );
}
