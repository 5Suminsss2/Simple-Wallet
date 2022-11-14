import { AiFillStar, AiFillBell } from "react-icons/ai";
import styled from "styled-components";

function Alaram() {
  
  // CSS
  const AlaramContainer = styled.section`
    margin-top: 10px;
  `
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
  `

  return (
    <AlaramContainer>
      <AlaramItems>
        <AiFillStar size="15" color="#d9d9d9" />
        <AlarmText>'신한 적금 납입'까지 3일 남았습니다.</AlarmText>
      </AlaramItems>
      <AlaramItems>
        <AiFillBell size="15" color="#d9d9d9" />
        <AlarmText>‘제주도 여행가기’ 목표까지 200,000원!</AlarmText>
      </AlaramItems>
    </AlaramContainer>
  );
}

export default Alaram;
