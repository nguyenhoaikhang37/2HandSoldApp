import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

const AppPickerField = ({ items, name, placeholder, width }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        width={width}
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectedItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppPickerField;
