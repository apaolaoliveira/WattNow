import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};
  min-height: 100vh;
  padding: 40px;
  color: ${({ theme }) => theme.COLORS.BLACK};

  &.full {
    background-color: red !important;
  }
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const SubHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const AddButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 24px;
  background: white;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: 500;
  font-size: 1rem;
  border: 2px solid;
  border-image: linear-gradient(to right, #80bfff, #00ffff, #00ff80) 1;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px 0;
`;

export const ImpactGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const ImpactCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  flex: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const ScoreBox = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;