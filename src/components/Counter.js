import { useState, useRef } from "react";
import styled from "styled-components";
import { Observables } from "rxjs";

const Counter = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [time, setTime] = useState(0);
  const counterRef = useRef();

  const renderTime = () => {
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

  const handleWait = () => {
    console.log("Double click!");
    clearInterval(counterRef.current);
    setIsPaused(time);
  };

  return (
    <>
      <TimeContainer>{renderTime()}</TimeContainer>
      <ButtonContainer>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onDoubleClick={handleWait}>Wait</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </>
  );
};

const TimeContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: 0 5px 0 0;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:last-child {
    margin: 0 0 0 0;
  }
`;

export default Counter;
