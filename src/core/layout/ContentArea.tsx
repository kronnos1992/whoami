import styled from "styled-components";

export const ContentArea = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem 1rem;
  }
`;
