import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const BloodInput = ({ type, name, label, disabled }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              disabled={disabled}
              type={type}
              id={name}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BloodInput;
