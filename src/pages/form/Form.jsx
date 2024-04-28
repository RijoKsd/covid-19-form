import {
  Button,
  DataDisplay,
  Divider,
  FormGroup,
  FormWrapper,
  Heading,
  Input,
  JsonData,
  Label,
  Span,
  Wrapper,
} from "../../styles/form.styled";

const Form = ({ dispatch, state }) => {
  const { firstName, lastName, date, pinCode, email, phone, file } = state;

  console.log(firstName, "firstName");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <DataDisplay>
        <h4>Form Data from state</h4>
        <JsonData>
          {JSON.stringify(
            {
              state
            },
            null,
            2
          )}
        </JsonData>
      </DataDisplay>
      <Wrapper>
        <Heading>COVID-19 Vaccination Card Upload Form</Heading>
        <Divider />
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <FormGroup>
              <Label htmlFor="first-name">Name</Label>
              <Input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  dispatch({ type: "firstName", payload: e.target.value });
                }}

                // onChange={(e) =>
                //   setFormData({ ...formData, firstName: e.target.value })
                // }

                // onChange={handleInputChange}
                // onInvalid={(e) => {
                //   e.target.setCustomValidity("Please enter a valid name");
                // }}
              />
              <Span>First Name</Span>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                // onChange={(e) =>
                //   setFormData({ ...formData, lastName: e.target.value })
                // }
                // onChange={handleInputChange}
                onChange = { (e) =>{
                  dispatch({ type: "lastName", payload: e.target.value });
                
                }}
              />
              <Span>Last Name</Span>
            </FormGroup>
          </FormWrapper>
          <FormWrapper>
            <FormGroup>
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={date}
                // onChange={(e) =>
                //   setFormData({ ...formData, date: e.target.value })
                // }
                // onChange={handleInputChange}

                onChange = { (e) =>{
                  dispatch({ type: "date", payload: e.target.value });
                
                }}
              />
              <Span>Date</Span>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="zip-code">Pin Code</Label>
              <Input
                type="text"
                id="zip-code"
                name="pinCode"
                inputMode="numeric"
                minLength={6}
                maxLength={6}
                value={pinCode}
                // onChange={(e) =>
                //   setFormData({ ...formData, pinCode: e.target.value })
                // }
                // onChange={handleInputChange}
                onChange = { (e) =>{
                  dispatch({ type: "pinCode", payload: e.target.value });
                
                }}
              />
            </FormGroup>
          </FormWrapper>

          <FormWrapper>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                inputMode="email"
                value={email}
                // onChange={(e) =>
                //   setFormData({ ...formData, email: e.target.value })
                // }
                // onChange={handleInputChange}
                onChange = { (e) =>{
                  dispatch({ type: "email", payload: e.target.value });
                
                }}
              />
              <Span>example@example.com</Span>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                inputMode="tel"
                minLength={10}
                maxLength={10}
                value={phone}
                // onChange={(e) =>
                //   setFormData({ ...formData, phone: e.target.value })
                // }
                // onChange={handleInputChange}
                onChange = { (e) =>{
                  dispatch({ type: "phone", payload: e.target.value });
                
                }}
              />
              <Span>Please enter a valid phone number</Span>
            </FormGroup>
          </FormWrapper>

          <FormWrapper>
            <FormGroup>
              <Label htmlFor="file">Upload Vaccination Card</Label>
              <Input
                type="file"
                id="file"
                name="file"
                value={file}
                // onChange={(e) =>
                //   setFormData({ ...formData, file: e.target.value })
                // }
                // onChange={handleInputChange}
                onChange = { (e) =>{
                  dispatch({ type: "file", payload: e.target.value });
                
                }}
              />
            </FormGroup>
          </FormWrapper>
          <Button type="submit">Submit</Button>
        </form>
      </Wrapper>
    </>
  );
};

export default Form;
