import Form from "../pages/form/Form";
import { useState } from "react";

const FormState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        date={date}
        pinCode={pinCode}
        email={email}
        phone={phone}
        file={file}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setDate={setDate}
        setPinCode={setPinCode}
        setEmail={setEmail}
        setPhone={setPhone}
        setFile={setFile}
        handleSubmit={handleSubmit}
      
      />
    </div>
  );
};

export default FormState;
