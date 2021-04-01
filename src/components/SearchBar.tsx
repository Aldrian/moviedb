import { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "./Icon";

const SearchBarElem = styled.div`
  position: relative;
  display: block;

  width: 100%;
  height: 47px;

  margin-top: 20px;

  input {
    width: calc(100% - 50px);
    height: 50px;
    padding-left: 50px;

    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.backgroundLight};
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 4px;

    transition: color 0.3s ease, background-color 0.3s ease;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.textLight};

      transition: color 0.3s ease;
    }
  }

  .searchIcon {
    position: absolute;
    left: 15px;
    top: 15px;
    z-index: 999;
    color: ${(props) => props.theme.colors.header};

    transition: color 0.3s ease;
  }

  .closeIcon {
    color: ${(props) => props.theme.colors.header};
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;

    transition: color 0.3s ease;
  }
`;

type SearchBarProps = {
  onActionCalled: Function;
};

export const SearchBar = ({ onActionCalled }: SearchBarProps) => {
  const [searchContent, setSearchContent] = useState("");

  const handleSearch = () => {
    if (searchContent !== "") {
      onActionCalled(searchContent.trim());
    }
  };

  return (
    <SearchBarElem>
      <Icon
        className="searchIcon"
        name="search"
        onClick={() => {
          handleSearch();
        }}
      />
      <input
        type="text"
        placeholder="Rechercher un film"
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onBlur={() => {
          handleSearch();
        }}
      />
      {searchContent !== "" && (
        <Icon
          className="closeIcon"
          name="close"
          onClick={() => {
            setSearchContent("");
          }}
        />
      )}
    </SearchBarElem>
  );
};
