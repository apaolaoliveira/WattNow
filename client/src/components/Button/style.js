import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 5px 20px;
  border-radius: 32px;
  font-size: 1rem;
  font-weight: 500;
  background: white;
  color: ${({ theme }) => theme.COLORS.BLACK};
  position: relative;
  z-index: 0;
  cursor: pointer;
  border: none;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 2px;
    border-radius: inherit;
    background: linear-gradient(90deg, #80BFFF, #00FFFF, #00FF80);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
