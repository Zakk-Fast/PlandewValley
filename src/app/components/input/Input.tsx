import styles from "./Input.module.scss";

type InputProps = {
  id?: string;
  type?: "text" | "number";
  inputMode: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  pattern?: string;
};

export default function Input({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  required = false,
  className = "",
}: InputProps) {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={styles.input}
        inputMode={type === "number" ? "numeric" : undefined}
        pattern={type === "number" ? "[0-9]*" : undefined}
      />
    </div>
  );
}
