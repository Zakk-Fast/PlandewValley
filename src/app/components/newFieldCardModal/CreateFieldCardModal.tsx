"use client";

import { useState } from "react";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import { allSteps } from "./stepIndex";
import StepRenderer from "./StepRenderer";
import { Step } from "types/Step";

import { useFieldCardStore } from "store/useFieldCardStore";
import { FieldCardFormData } from "types/FieldCard";

import { fertilizers } from "@/data/fertilizers";

import styles from "./NewFieldCardModal.module.scss";

type CreateFieldCardModalProps = {
  modalOpen: boolean;
  closeModal: () => void;
};

export default function CreateFieldCardModal({
  modalOpen,
  closeModal,
}: CreateFieldCardModalProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const defaultFertilizer = fertilizers.find((f) => f.name === "None")!;
  const [answers, setAnswers] = useState<FieldCardFormData>({
    name: "",
    layoutType: "Select",
    tileCount: 0,
    fertilizer: defaultFertilizer,
    fertilizerCost: null,
    paysForFertilizer: false,
    seedCost: null,
    paysForSeeds: false,
  });
  const [sprinklerCount, setSprinklerCount] = useState<number | null>(null);
  const [sprinklerType, setSprinklerType] = useState<
    "Sprinkler" | "Quality Sprinkler" | "Iridium Sprinkler"
  >("Sprinkler");
  const [pressureNozzle, setPressureNozzle] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<Step[]>([
    allSteps[0],
    allSteps[1],
  ]);

  const currentStep = visibleSteps[stepIndex];

  const nextStep = () => {
    const currentId = currentStep.id;

    if (currentId === "layoutType") {
      const type = answers.layoutType;

      if (type !== "Custom" && type !== "Preset") return;

      const branchStepId =
        type === "Custom" ? "customTileCount" : "sprinklerCount";
      const branchStep = allSteps.find((s) => s.id === branchStepId);
      if (!branchStep) return;

      setVisibleSteps([
        allSteps[0],
        allSteps[1],
        branchStep,
        allSteps[4],
        allSteps[5],
      ]);

      setStepIndex(2);
      return;
    }

    setStepIndex((prev) => Math.min(prev + 1, visibleSteps.length - 1));
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const calculateTileCount = (): number => {
    if (answers.layoutType === "Custom") {
      return answers.tileCount;
    }

    const baseCoverage = {
      Sprinkler: 4,
      "Quality Sprinkler": 8,
      "Iridium Sprinkler": 24,
    };

    const base = baseCoverage[sprinklerType];
    const multiplier = pressureNozzle ? 2 : 1;

    return base * multiplier * (sprinklerCount ?? 0);
  };

  const isCurrentStepValid = () => {
    switch (currentStep.id) {
      case "name":
        return answers.name.trim().length > 0;
      case "customTileCount":
        return answers.tileCount > 0;
      case "sprinklerCount":
        return sprinklerCount !== null && sprinklerCount > 0;
      case "layoutType":
        return (
          answers.layoutType === "Preset" || answers.layoutType === "Custom"
        );
      case "fertilizer":
        return answers.fertilizer !== null;
      case "cost":
        return !(
          (answers.paysForSeeds && answers.seedCost === null) ||
          (answers.paysForFertilizer && answers.fertilizerCost === null)
        );
      default:
        return true;
    }
  };

  const handleConfirm = () => {
    const complete: FieldCardFormData = {
      ...answers,
      tileCount: calculateTileCount(),
    };

    useFieldCardStore.getState().addCard(complete);
    handleClose();
  };

  const handleClose = () => {
    setStepIndex(0);
    setAnswers({
      name: "",
      layoutType: "Select",
      tileCount: 0,
      fertilizer: defaultFertilizer,
      fertilizerCost: null,
      paysForFertilizer: false,
      seedCost: null,
      paysForSeeds: false,
    });
    setSprinklerCount(null);
    setSprinklerType("Sprinkler");
    setPressureNozzle(false);
    setVisibleSteps([allSteps[0], allSteps[1]]);
    closeModal();
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleClose}>
      <div className={styles.container}>
        <p>{currentStep.label}</p>

        <div className={styles.stepContent}>
          <StepRenderer
            step={currentStep.id}
            answers={answers}
            setAnswers={setAnswers}
            sprinklerCount={sprinklerCount}
            setSprinklerCount={setSprinklerCount}
            sprinklerType={sprinklerType}
            setSprinklerType={setSprinklerType}
            pressureNozzle={pressureNozzle}
            setPressureNozzle={setPressureNozzle}
            onLayoutTypeSelect={(type) =>
              setAnswers((prev) => ({
                ...prev,
                layoutType: type,
              }))
            }
          />
        </div>

        <div className={styles.controls}>
          <Button onClick={prevStep} disabled={stepIndex === 0}>
            Back
          </Button>

          {currentStep.id === "cost" ? (
            <Button onClick={handleConfirm}>Confirm</Button>
          ) : (
            <Button onClick={nextStep} disabled={!isCurrentStepValid()}>
              Next
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
