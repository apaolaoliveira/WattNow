import styled from "styled-components";

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENT_HORIZONTAL};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2d2d2d;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #5f5f5f;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: #4a4a4a;
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid transparent;
  border-radius: 30px;
  outline: none;
  background-color: #f9f9f9;
  font-size: 0.95rem;
  border: 1px solid black;
`;

export const Hint = styled.span`
  font-size: 0.75rem;
  color: #a0a0a0;
  margin-top: -15px;
  margin-bottom: 10px;
  text-align: left;
`;

export const LocationButton = styled.button`
  background: none;
  border: none;
  color: #3c3c3c;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    color: #2c2c2c;
  }
`;