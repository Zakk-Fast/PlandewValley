import Input from "app/components/input/Input";
import { FieldCardFormData } from "types/FieldCard";


export default function NameStep({
  answers,
  setAnswers,
}: {
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
}) {
  return (
    <Input
      type="text"
      inputMode="text"
      value={answers.name}
      onChange={(e) =>
        setAnswers((prev) => ({ ...prev, name: e.target.value }))
      }
      placeholder="south flower field"
    />
  );
}
