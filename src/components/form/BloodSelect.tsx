import { Form, Input, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  mode?:'multiple'| undefined;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
};

const BloodSelect = ({ label, name, options, disabled,mode,required=false }: TPHSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
            <Form.Item label={label} required={required}>
              <Select
              placeholder="Select one"
              mode={mode} 
                {...field}
                style={{ width: "100%" }}
                options={options}
                size="large"
                disabled={disabled}
              />
              {error && <small style={{ color: "red" }}>{error?.message}</small>}
            </Form.Item>
          )}
      />
    </div>
  );
};

export default BloodSelect;
