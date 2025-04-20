import styled from "styled-components";

export const PageContainer = styled.div`
  background: #6fffc7;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1c1c1c;
  margin-bottom: 20px;
`;

export const FilterBar = styled.div`
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;


export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;


export const FilterLabel = styled.label`
  font-weight: 600;
  background: white;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-weight: 500;
`;

export const LocationsContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 90%;
  margin: 0 auto;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
`;

export const LocationCard = styled.div`
  text-align: left;
  background: #f6f6f6;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`;

export const LocationTitle = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 8px;
`;

export const LocationInfo = styled.p`
  font-size: 1rem;
  color: #444;
`;
