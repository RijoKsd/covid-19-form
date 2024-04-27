import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  /* mediaquery */
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
export const Heading = styled.h1`
  font-size: 2.4rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;

  margin: 30px 0 50px 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FormGroup = styled.div`
  width: 100%;
  padding: 0 20px;
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 5px;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  color: #000;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;

  &:focus,
  &:hover {
    border: 1px solid #000;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  display: block;
  text-align: left;
  color: #c4c9d2;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.5rem;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: #000;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
