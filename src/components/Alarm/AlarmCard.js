import styled from "styled-components";
import { AiFillBell } from "react-icons/ai";

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

function AlarmCard({ data }) {
  
  // 디데이 계산기
  const dDay = (data) => {
    let today = new Date();
    let dday = new Date(
      Number(data.year),
      Number(data.month)-1,
      Number(data.date)
    );
    let gap = dday.getTime() - today.getTime();
    let result = Math.ceil(gap / (1000 * 60* 60* 24));
    return result;
  }

  return (
    <AlarmItems>
      <AiFillBell size="15" color="#98a8f0" />
      {dDay(data) === 0 ? (
        <AlarmText>'{data.alarmContents}' 당일 입니다!</AlarmText>
      ) : dDay(data) > 0 ? (
        <AlarmText>
          '{data.alarmContents}'까지 {dDay(data)}일 남았습니다.
        </AlarmText>
      ) : (
        <AlarmText>'{data.alarmContents}' 알림은 지난지 오래입니다.</AlarmText>
      )}
    </AlarmItems>
  );
}

export default AlarmCard;
