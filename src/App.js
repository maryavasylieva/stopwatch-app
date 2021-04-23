import styled from "styled-components";

import Counter from "./components/Counter";

function App() {
  return (
    <Container>
      <Title>Stopwatch</Title>
      <Counter />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 40px;
  letter-spacing: 4px;
  text-align: center;
`;

export default App;
