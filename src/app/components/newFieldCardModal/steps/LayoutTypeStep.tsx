import Select from "app/components/select/Select";

type Props = {
  value: "Preset" | "Custom" | "Select";
  onSelect: (type: "Preset" | "Custom" | "Select") => void;
};

export default function LayoutTypeStep({ value, onSelect }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "Preset" | "Custom" | "Select";
    onSelect(selected);
  };

  return (
    <Select
      id="layout"
      options={["Select", "Preset", "Custom"]}
      value={value}
      onChange={handleChange}
    />
  );
}