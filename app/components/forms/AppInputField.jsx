import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppInputField = ({ name, width, ...otherProps }) => {
  const { setFieldValue, values, errors, touched, setFieldTouched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppInputField;
