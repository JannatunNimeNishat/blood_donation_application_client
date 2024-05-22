import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};

const BloodTextArea = ({

  name,
  label,
  disabled,
  required = false,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}
          className="w-full "
          >
            <TextArea
            className="w-full"
              {...field}
              disabled={disabled}
              id={name}
              size="large"
              required={required}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BloodTextArea;
