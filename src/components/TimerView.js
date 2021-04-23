import styled from "styled-components";
import { renderTime } from "../utils/renderTime";

const TimerView = ({ time }) => {
  const { hours, minutes, seconds } = renderTime(time);
  return (
    <Wrapper>
      <TimeWrapper>
        <Time>{hours}</Time>
        <TimeLabel>hours</TimeLabel>
      </TimeWrapper>

      <TimeWrapper>
        <Time>{minutes}</Time>
        <TimeLabel>minutes</TimeLabel>
      </TimeWrapper>

      <TimeWrapper>
        <Time>{seconds}</Time>
        <TimeLabel>seconds</TimeLabel>
      </TimeWrapper>
    </Wrapper>
  );
};

//TIMER STYLES
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TimeWrapper = styled.div`
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
  min-width: 90px;
  position: relative;
  &:not(:last-child):before,
  &:not(:last-child):after {
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    height: 5px;
    width: 5px;
    border-radius: 50%;
    display: block;
    position: absolute;
    right: -42px;
  }
  &:not(:last-child):before {
    top: 35%;
  }
  &:not(:last-child):after {
    top: 50%;
  }
`;

const Time = styled.span`
  font-family: "Titillium Web", sans-serif;
  font-size: 50px;
  &:before {
    color: #fff;
    font-size: 4.2rem;
    text-transform: uppercase;
  }
`;

const TimeLabel = styled.p`
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 12px;
  margin-top: 10px;
`;

export default TimerView;
