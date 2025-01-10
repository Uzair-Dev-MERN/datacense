import { Select } from "antd";

interface SelectFieldProps {
  options: { value: string | number; label: string }[];
  placeholder?: string | number;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  options,
  placeholder = "",
}) => {
  return (
    <div>
      <Select placeholder={placeholder} options={options} />
    </div>
  );
};
