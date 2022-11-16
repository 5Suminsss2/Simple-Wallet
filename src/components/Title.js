import { AiFillStar, AiFillBell } from "react-icons/ai";
import styled from "styled-components";
import { alarmModalState, goalModalState } from "../store/atom";
import {
  useSetRecoilState,
} from "recoil";

function Title() {
  // 알람 모달 창
  const openAlarmModalHandler = useSetRecoilState(alarmModalState); // 값만 변경 시키기
  const openAlarmModal = () => {
    openAlarmModalHandler(true);
  };

  // 목표 모달 창
  const openGoalModalHandler = useSetRecoilState(goalModalState); // 값만 변경 시키기
  const openGoalModal = () => {
    openGoalModalHandler(true);
  };

  // CSS
  const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const TitlePart = styled.div`
    margin-left: 130px;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  `;

  const IconPart = styled.div`
    display: flex;
  `;

  const IconItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #d9d9d9;

    &:hover {
      background: #dee2e8;
    }
  `;

  return (
    <TitleContainer>
      <TitlePart>Simple Wallet</TitlePart>
      <IconPart>
        <IconItem onClick={openGoalModal}>
          <AiFillStar size="15" color="#d9d9d9" />
        </IconItem>
        <IconItem onClick={openAlarmModal}>
          <AiFillBell size="15" color="#d9d9d9" />
        </IconItem>
      </IconPart>
    </TitleContainer>
  );
}

export default Title;