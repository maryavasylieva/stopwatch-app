import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Counter = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [time, setTime] = useState(0);
  const counterRef = useRef();

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const handleStart = () => {
    counterRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIsStart(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    clearInterval(counterRef.current);
    setIsPaused(true);
    setTime(0);
  };

  const handleReset = () => {
    setIsStart(true);
    setIsPaused(false);
    setTime(0);
  };

  const handleWait = () => {};

  return (
    <Container>
      <TimeContainer>{formatTime()}</TimeContainer>
      <ButtonContainer>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleWait}>Wait</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const TimeContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-right: 15px;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: 0 0 0 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Counter;
