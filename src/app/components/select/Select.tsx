type SelectProps = {
  options: string[] | number[];
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number | readonly string[] | undefined;
};

import style from "./Select.module.scss";

export default function Select({ options, id, value, onChange }: SelectProps) {
  return (
    <select className={style.select} id={id} value={value} onChange={onChange}>
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
}
