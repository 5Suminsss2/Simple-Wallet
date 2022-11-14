import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function GoalCard({ data }) {

  // CSS
  const AlaramItems = styled.div`
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

  return (
    <AlaramItems>
      <AiFillStar size="15" color="#d9d9d9" />
      <AlarmText>'{data.goalContents}' 목표까지 200,000원!</AlarmText>
    </AlaramItems>
  );
}

export default GoalCard;
