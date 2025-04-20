import styled from "styled-components";

export const PageContainer = styled.div`
  background: #8fffff;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Quicksand', sans-serif;
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 2px dotted #000;
  width: fit-content;
  margin-inline: auto;
`;

export const TopBar = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: 2px solid #00ffbf;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border-radius: 20px;
  border: 2px solid #ddd;
  font-weight: 500;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardHeader = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const Author = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

export const ShowMore = styled.span`
  color: #007bff;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.8rem;
`;

export const ImagePreview = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #00ffbf;
`;

export const ShowMoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

