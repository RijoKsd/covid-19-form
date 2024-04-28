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

  return <Form formData={formData} setFormData={setFormData} />;
};

export default FormGroupState;
