import Form from "../pages/form/Form";
import { useState } from "react";

const FormGroupState = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    pinCode: "",
    email: "",
    phone: "",
    file: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
    />
  );
};

export default FormGroupState;
