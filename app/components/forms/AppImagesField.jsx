import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../imageSelect/ImageInputList";

const AppImagesField = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppImagesField;
