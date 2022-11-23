import styled from "styled-components";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { goalDatasetState, totalState } from "../../store/atom";
import axios from "axios";

// CSS

  const AlarmItemsclose = styled.div`
    display: flex;
    position: relative;
    right: -20px;
    width: 10px;
    transition: 0.3s;
    cursor: pointer;
  `;

  const AlarmItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 350px;
    padding: 3px 8px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    overflow: hidden;
    &:hover ${AlarmItemsclose} {
      transition: 0.3s;
      right: 10px;
    }

    @media screen and (min-width: 1200px) {
      margin-right: 10px;
      flex-wrap: wrap;
    }
  `;

  const AlarmText = styled.div`
    margin-left: 5px;
    font-size: 13px;
  `;

  const AlarmItemsContents = styled.div`
    display: flex;
  `;
function GoalCard({ data }) {
  const total = useRecoilValue(totalState); //입금, 출금 모두 더한 금액
  const remainingPrice = total - data.price; // 총 금액 
  const [dataset, setDataset] = useRecoilState(goalDatasetState); // 기존 목표 내역

  // 목표 알림 제거하기
  const handleRemove = async ({ id }) => {
    let filtered = dataset.filter((element) => element !== data);

    await axios.delete(`http://localhost:4000/goalData/${id}`).then(
      // 삭제 버튼 누르는 즉시 새로고침 없이 등록
      setDataset(filtered)
    );
  };

  return (
    <AlarmItems>
      <AlarmItemsContents>
        <AiFillStar size="15" color="#98a8f0" />
        {remainingPrice >= 0 || remainingPrice === 0 ? (
          <AlarmText>'{data.goalContents}' 목표 달성!</AlarmText>
        ) : (
          <AlarmText>
            '{data.goalContents}' 목표까지{" "}
            {Math.abs(remainingPrice).toLocaleString("ko-KR")}원 남았어요!
          </AlarmText>
        )}
      </AlarmItemsContents>
      <AlarmItemsclose
        type="button"
        onClick={() => {
          handleRemove({ id: data.id });
        }}
      >
        <AiOutlineClose />
      </AlarmItemsclose>
    </AlarmItems>
  );
}

export default GoalCard;
