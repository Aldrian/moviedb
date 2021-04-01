import styled from "@emotion/styled";

const Button = styled.button`
  color: hotpink;
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Test</Button>
      </header>
    </div>
  );
};

export default App;
