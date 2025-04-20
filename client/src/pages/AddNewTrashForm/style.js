import styled from "styled-components";

export const ModalOverlay = styled.div`
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 12px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 12px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 2px solid transparent;
  background: linear-gradient(to right, #80BFFF, #00FFBF);
  border-radius: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

export const Video = styled.video`
  width: 100%;
  border-radius: 12px;
  margin-top: 10px;
  background: black;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  margin-top: 10px;
  object-fit: cover;
`;
