import Input from "app/components/input/Input";
import { FieldCardFormData } from "types/FieldCard";

export default function CustomTileCountStep({
  answers,
  setAnswers,
}: {
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
}) {
  return (
    <Input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={answers.tileCount === 0 ? "" : String(answers.tileCount)}
      onChange={(e) => {
        const val = e.target.value;
        if (/^\d*$/.test(val)) {
          setAnswers((prev) => ({
            ...prev,
            tileCount: val === "" ? 0 : Number(val),
          }));
        }
      }}
      placeholder="e.g. 48"
    />
  );
}
