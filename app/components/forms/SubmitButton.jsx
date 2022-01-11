import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({ title = "Login" }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};
export default SubmitButton;
