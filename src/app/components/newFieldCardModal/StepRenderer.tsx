import { StepId } from "types/Step";
import NameStep from "./steps/NameStep";
import LayoutTypeStep from "./steps/LayoutTypeStep";
import CustomTileCountStep from "./steps/CustomTileCountStep";
import SprinklerSetupStep from "./steps/SprinklerSetupStep";
import FertilizerStep from "./steps/FertilizerStep";
import CostStep from "./steps/CostStep";
import { FieldCardFormData } from "types/FieldCard";

type Props = {
  step: StepId;
  answers: FieldCardFormData;
  setAnswers: React.Dispatch<React.SetStateAction<FieldCardFormData>>;
  onLayoutTypeSelect: (type: "Preset" | "Custom" | "Select") => void;
  sprinklerCount?: number | null;
  setSprinklerCount?: (n: number | null) => void;
  sprinklerType?: "Sprinkler" | "Quality Sprinkler" | "Iridium Sprinkler";
  setSprinklerType?: (
    t: "Sprinkler" | "Quality Sprinkler" | "Iridium Sprinkler"
  ) => void;
  pressureNozzle?: boolean;
  setPressureNozzle?: (b: boolean) => void;
};

export default function StepRenderer(props: Props) {
  switch (props.step) {
    case "name":
      return <NameStep answers={props.answers} setAnswers={props.setAnswers} />;

    case "layoutType":
      return (
        <LayoutTypeStep
          value={props.answers.layoutType || "Select"}
          onSelect={props.onLayoutTypeSelect}
        />
      );

    case "customTileCount":
      return (
        <CustomTileCountStep
          answers={props.answers}
          setAnswers={props.setAnswers}
        />
      );

    case "sprinklerCount":
      return (
        <SprinklerSetupStep
          sprinklerCount={props.sprinklerCount!}
          setSprinklerCount={props.setSprinklerCount!}
          sprinklerType={props.sprinklerType!}
          setSprinklerType={props.setSprinklerType!}
          pressureNozzle={props.pressureNozzle!}
          setPressureNozzle={props.setPressureNozzle!}
        />
      );

    case "fertilizer":
      return (
        <FertilizerStep answers={props.answers} setAnswers={props.setAnswers} />
      );

    case "cost":
      return <CostStep answers={props.answers} setAnswers={props.setAnswers} />;

    default:
      return null;
  }
}
