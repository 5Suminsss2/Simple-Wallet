import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { totalState } from "../../store/atom";

function GoalCard({ data }) {

  // CSS
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

  const total = useRecoilValue(totalState);
  const remainingPrice =total - data.price;

  return (
    <AlarmItems>
      <AiFillStar size="15" color="#98a8f0" />
      {remainingPrice >= 0 || remainingPrice === 0 ? (
        <AlarmText>'{data.goalContents}' 목표 달성!</AlarmText>
      ) : (
        <AlarmText>
          '{data.goalContents}' 목표까지{" "}
          {Math.abs(remainingPrice).toLocaleString("ko-KR")}원 남았어요!
        </AlarmText>
      )}
    </AlarmItems>
  );
}

export default GoalCard;
