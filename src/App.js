import styled from "styled-components";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Title>Stopwatch</Title>
      </div>
      <Counter />
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
`;

export default App;
