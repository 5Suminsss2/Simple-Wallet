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
