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

const Form = ({ formData, setFormData }) => {
  const { firstName, lastName, date, pinCode, email, phone, file } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  console.log(formData);
  return (
    <>
      <DataDisplay>
        <h4>Form Data from state</h4>
        <JsonData>
          {JSON.stringify(
            {
              formData,
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
                name="first-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter a valid name");
                }}
              />
              <Span>First Name</Span>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="last-name"
                placeholder="Last name"
                value={lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <Span>Date</Span>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="zip-code">Pin Code</Label>
              <Input
                type="text"
                id="zip-code"
                name="zip-code"
                inputMode="numeric"
                minLength={6}
                maxLength={6}
                value={pinCode}
                onChange={(e) =>
                  setFormData({ ...formData, pinCode: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, file: e.target.value })
                }
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
