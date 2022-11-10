import AccountHistory from "../components/AccountHistory";
import Alaram from "../components/Alaram";
import GraphAccount from "../components/GraphAccount";
import CreateAccountHistory from "../components/CreateAccountHistory";
import Title from "../components/Title";
import styled from "styled-components";
import Total from "../components/Total";
import GoalModal from "../components/Modal/GoalModal";
import AlarmModal from "../components/Modal/AlarmModal";
import { useRecoilValue } from "recoil";
import { alarmModalState, goalModalState } from "../store/atom";

function Main() {

  // 알람 모달, 목표 모달 현재 상태값 가져오기
  const currentAlarmState = useRecoilValue(alarmModalState); // 읽기 전용
  const currentGoalState = useRecoilValue(goalModalState); // 읽기 전용
  console.log(currentAlarmState, currentGoalState);
  
  // CSS
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    margin: 30px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  `;

  return (
    <Wrapper>
      <Title />
      <Alaram />
      <Total />
      <GraphAccount />
      <AccountHistory />
      <CreateAccountHistory />
      {currentAlarmState ? <AlarmModal /> : null}
      {currentGoalState ? <GoalModal /> : null}
    </Wrapper>
  );
}

export default Main;