import styled from "@emotion/styled";

const ContainerElem = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Container: React.FC = ({ children }) => {
  return <ContainerElem>{children}</ContainerElem>;
};
