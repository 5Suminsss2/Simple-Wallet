import { AiFillStar, AiFillBell } from "react-icons/ai";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { alarmDatasetState, goalDatasetState } from "../../store/atom";
import GoalCard from "./GoalCard";
import AlarmCard from "./AlarmCard";

function Alarm() {
  // CSS
  const AlarmContainer = styled.section`
    margin-top: 10px;
  `;
  const AlarmItems = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 350px;
    padding: 3px 8px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  `;

  const AlarmText = styled.div`
    margin-left: 5px;
    font-size: 13px;
  `;

  // 목표 데이터 가져오기
  const goalDataset = useRecoilValue(goalDatasetState);

  const goalCard = (data) => {
    return <GoalCard data={data} />;
  };

  // 알람 데이터 가져오기
  const alarmDataset = useRecoilValue(alarmDatasetState);

  const alarmCard = (data) => {
    return <AlarmCard data={data} />;
  };

  return (
    <AlarmContainer>
      {goalDataset.map(goalCard)}
      {alarmDataset.map(alarmCard)}
    </AlarmContainer>
  );
}

export default Alarm;
