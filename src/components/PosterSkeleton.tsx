import styled from "@emotion/styled";

const PosterElem = styled.div`
  display: block;
  position: relative;

  width: 210px;
  height: 319px;

  margin: 0.2rem 0.5rem;

  background-color: ${(props) => props.theme.colors.backgroundLight};

  transition: background-color 0.3s ease;
`;

export const PosterSkeleton = () => <PosterElem />;
