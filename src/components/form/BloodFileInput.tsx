
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";
import { Controller } from "react-hook-form";

type TMainFileInputProps = {
    name:string;
    label?:string;
    required?:boolean
}

const BloodFileInput = ({label,name,required=false}:TMainFileInputProps) => {
    return (
        <div>
        <Controller
          name={name}
          render={({ field, fieldState: { error } }) => (
            <Form.Item label={label} required={required} 
           
            >
             <Upload {...field}
            
             >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
              {error && <small style={{ color: "red" }}>{error?.message}</small>}
            </Form.Item>
          )}
        />
      </div>
    );
};

export default BloodFileInput;