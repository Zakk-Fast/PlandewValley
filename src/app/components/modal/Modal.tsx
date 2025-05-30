"use client";

import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
}

export default function Modal({ children, isOpen = true }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
