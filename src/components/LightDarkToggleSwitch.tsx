import styled from "@emotion/styled";
import { Icon } from "./Icon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${(props) => props.theme.colors.text};

  transition: color 0.3s ease, background-color 0.3s ease;

  span {
    font-size: 16px;
  }
`;
//https://codepen.io/danny_pule/pen/vNbqxx
const LightDarkToggleSwitchElem = styled.div`
  display: block;
  height: 22px;
  width: 40px;

  margin-left: 8px;
  margin-right: 8px;

  input:empty {
    margin-left: -9999px;
  }

  input:empty ~ label {
    position: relative;
    float: left;
    width: 150px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input:empty ~ label:before,
  input:empty ~ label:after {
    position: absolute;
    display: block;
    content: " ";
    transition: all 0.3s ease;
  }

  input:empty ~ label:before {
    top: 3px;
    left: 0px;
    width: 32px;
    height: 13px;
    border-radius: 12px;
    background-color: #bdbdbd;
  }

  input:empty ~ label:after {
    top: -1px;
    left: -9px;
    width: 1.4em;
    height: 8px;
    bottom: 0.1em;
    margin-left: 0.1em;
    background-color: ${(props) => props.theme.colors.header};
    border-radius: 50%;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.text};
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  input:checked ~ label:after {
    left: 15px;
  }
`;

type LightDarkToggleSwitchProps = {
  checked: boolean;
  setChecked: Function;
};

export const LightDarkToggleSwitch = ({
  checked,
  setChecked,
}: LightDarkToggleSwitchProps) => (
  <Wrapper>
    <Icon name="wb_sunny" />
    <LightDarkToggleSwitchElem>
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <label htmlFor="toggle"></label>
    </LightDarkToggleSwitchElem>
    <Icon name="brightness_3" />
  </Wrapper>
);
