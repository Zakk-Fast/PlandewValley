import Select from "app/components/select/Select";
import Checkbox from "app/components/checkbox/Checkbox";
import Input from "app/components/input/Input";

type Props = {
  sprinklerCount: number | null;
  setSprinklerCount: (n: number | null) => void;
  sprinklerType: "Sprinkler" | "Quality Sprinkler" | "Iridium Sprinkler";
  setSprinklerType: (
    t: "Sprinkler" | "Quality Sprinkler" | "Iridium Sprinkler"
  ) => void;
  pressureNozzle: boolean;
  setPressureNozzle: (b: boolean) => void;
};

const sprinklerOptions = [
  "Sprinkler",
  "Quality Sprinkler",
  "Iridium Sprinkler",
];

export default function SprinklerSetupStep({
  sprinklerCount,
  setSprinklerCount,
  sprinklerType,
  setSprinklerType,
  pressureNozzle,
  setPressureNozzle,
}: Props) {
  return (
    <>
      <div className={""}>
        <label htmlFor="sprinklerType">Sprinkler Type</label>
        <Select
          id="sprinklerType"
          options={sprinklerOptions}
          value={sprinklerType}
          onChange={(e) =>
            setSprinklerType(
              e.target.value as
                | "Sprinkler"
                | "Quality Sprinkler"
                | "Iridium Sprinkler"
            )
          }
        />
      </div>

      <div className={""}>
        <Checkbox
          id="pressureNozzle"
          label="Pressure Nozzle?"
          checked={pressureNozzle}
          onChange={() => setPressureNozzle(!pressureNozzle)}
        />
      </div>

      <div className={""}>
        <label htmlFor="sprinklerCount">Number of Sprinklers</label>
        <Input
          id="sprinklerCount"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={sprinklerCount === null ? "" : sprinklerCount}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) {
              setSprinklerCount(val === "" ? null : Number(val));
            }
          }}
          placeholder="e.g. 2"
        />
      </div>
    </>
  );
}
