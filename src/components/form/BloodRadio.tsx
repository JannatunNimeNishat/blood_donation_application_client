import { Form, Radio } from "antd";
import { Controller } from "react-hook-form";

type TPHRadioProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  options: { value: string | number; label: string; disabled?: boolean }[] | undefined;
  className?:string
};

const BloodRadio = ({ label, name, options, disabled, required = false,className }: TPHRadioProps) => {
  return (
    <div className="">
      <Controller
        name={name}
        rules={{
          required: { value: required, message: "Required" },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} required={required}>
            <Radio.Group {...field} disabled={disabled}
            className={className}
            >
              {options?.map((option) => (
                <Radio key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
            {error && <small style={{ color: "red" }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BloodRadio;
