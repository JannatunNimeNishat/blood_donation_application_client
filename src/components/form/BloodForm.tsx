
import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  className?: string;
  setReset?: (resetFn: any) => void;
} & TFormConfig;

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

const BloodForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  className,
  setReset,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  if(setReset){
    setReset(methods.reset);
  }
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        className={className}
        onFinish={methods.handleSubmit(submit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default BloodForm;
