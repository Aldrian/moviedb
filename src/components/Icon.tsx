import styled from "@emotion/styled";

const IconElem = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
`;

type IconProps = {
  name: string;
  className?: string;
  onClick?: Function;
};

export const Icon = ({ name, className, onClick }: IconProps) => (
  <IconElem
    className={className || ""}
    onClick={(e) => {
      if (onClick) {
        onClick(e);
      }
    }}
  >
    {name}
  </IconElem>
);
