import { Form, Input } from "antd";
import { useState } from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};

const BloodInput = ({
  type,
  name,
  label,
  disabled,
  required = false,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        rules={{
          required: { value: required, message: "Required" },
          minLength: {
            value: type === "password" ? 6 : 0,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} required={required} className="w-full ">
            {type === "password" ? (
              <Input.Password
                placeholder="input password"
                className="w-full"
                {...field}
                disabled={disabled}
                type={type}
                id={name}
                size="large"
                
              />
            ) : (
              <Input
                className="w-full"
                {...field}
                disabled={disabled}
                type={type}
                id={name}
                size="large"
                
              />
            )}
            {error && <small className="text-red-500">{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BloodInput;
