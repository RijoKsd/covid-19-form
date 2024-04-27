import {
  Button,
  Divider,
  FormGroup,
  FormWrapper,
  Heading,
  Input,
  Label,
  Span,
  Wrapper,
} from "../../styles/form.styled";

const Form = () => {
  return (
    <Wrapper>
      <Heading>COVID-19 Vaccination Card Upload Form</Heading>
      <Divider />

      <form>
        <FormWrapper>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="first-name"
              placeholder="First name"
            />
            <Span>First Name</Span>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="last-name" placeholder="Last name" />
            <Span>Last Name</Span>
          </FormGroup>
        </FormWrapper>
        <FormWrapper>
          <FormGroup>
            <Label htmlFor="date">Date</Label>
            <Input type="date" id="date" name="date" />
            <Span>Date</Span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="zip-code">Zip Code</Label>
            <Input type="text" id="zip-code" name="zip-code" />
          </FormGroup>
        </FormWrapper>

        <FormWrapper>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" inputMode="email" />
            <Span>example@example.com</Span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="name" name="name" inputMode="tel" maxLength={10} />
            <Span>Please enter a valid phone number</Span>
          </FormGroup>
        </FormWrapper>

        <FormWrapper>
          <FormGroup>
            <Label htmlFor="file">Upload Vaccination Card</Label>
            <Input type="file" id="file" name="file" />
          </FormGroup>
        </FormWrapper>
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
