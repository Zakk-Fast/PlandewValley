"use client";

import { useEffect } from "react";
import Button from "../button/Button";
import { FieldCard } from "../fieldCard/FieldCard";
import { useFieldCardStore } from "store/useFieldCardStore";

import style from "./PlannerPlot.module.scss";

type PlannerPlot = {
  setModalOpen: (open: boolean) => void;
};

export default function PlannerPlot({ setModalOpen }: PlannerPlot) {
  const cards = useFieldCardStore((state) => state.cards);

  useEffect(() => {
    console.log("persisant field card data", cards);
  }, [cards]);

  return (
    <div className={style.planner_plot}>
      <div className={style.header}>
        <Button onClick={() => setModalOpen(true)}>Add Plot +</Button>
      </div>
      <div className={style.planner}>
        {cards.map((card) => (
          <FieldCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
