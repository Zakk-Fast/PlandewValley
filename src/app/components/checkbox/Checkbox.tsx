import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  id: string;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  id,
}: CheckboxProps) {
  return (
    <label className={styles.checkboxContainer} htmlFor={id}>
      <span className={styles.labelText}>{label}</span>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
}
