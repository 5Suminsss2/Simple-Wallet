import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import GlobalModal from "./GlobalModal";
import { goalModalState, goalDatasetState } from "../../store/atom";

// CSS
  const Label = styled.label`
    font-size: 14px;
  `;

  const DateInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    margin: 5px 0 10px 0;
  `;

  const DateInput = styled.input`
    width: 28%;
    height: 30px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
  `;

  const Input = styled.input`
    width: 330px;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    margin-top: ${(props) => props.marginTop || 0};
    margin-bottom: ${(props) => props.marginBottom || 0};
  `;

  const ModalButtonContainer = styled.div`
    margin-top: 30px;
    text-align: center;
  `;

  const ModalButton = styled.button`
    width: 80px;
    height: 35px;
    margin-right: ${(props) => props.marginRight};
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
    &:hover {
      background-color: grey;
    }
  `;

function GoalModal() { 

  // 목표 모달 각각 상태값 가져오기
  const [goalOpen, setGoalOpen] = useRecoilState(goalModalState);

  // 닫기 버튼 눌렀을 때
  const handleCancel = () => {
    if (goalOpen === true) {
      setGoalOpen(false);
    }
  };

  // 기존 거래 내역
  const [dataset, setDataset] = useRecoilState(goalDatasetState);

  // 새 거래 내역
  const [inputs, setInputs] = useState({
    startYear: "",
    startMonth: "",
    startDate: "",
    endYear: "",
    endMonth: "",
    endDate: "",
    goalContents: "",
    price: 0,
  });

  const {
    startYear,
    startMonth,
    startDate,
    endYear,
    endMonth,
    endDate,
    goalContents,
    price,
  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 새 거래내역 등록 버튼 눌렀을 때
  const handleSubmit = () => {
    setDataset([inputs, ...dataset]);

    // input 값 초기화
    setInputs({
      startYear: "",
      startMonth: "",
      startDate: "",
      endYear: "",
      endMonth: "",
      endDate: "",
      goalContents: "",
      price: 0,
    });

    setGoalOpen(false);

  };

  return (
    <GlobalModal title="목표 설정" icon="goal">
      <form onSubmit={handleSubmit}>
        <Label>시작 날짜</Label>
        <DateInputBox>
          <DateInput
            placeholder="2023"
            name="startYear"
            value={startYear}
            onChange={onChange}
          />
          <DateInput
            placeholder="01"
            name="startMonth"
            value={startMonth}
            onChange={onChange}
          />
          <DateInput
            placeholder="01"
            name="startDate"
            value={startDate}
            onChange={onChange}
          />
        </DateInputBox>
        <Label>목표 날짜</Label>
        <DateInputBox>
          <DateInput
            placeholder="2023"
            name="endYear"
            value={endYear}
            onChange={onChange}
          />
          <DateInput
            placeholder="02"
            name="endMonth"
            value={endMonth}
            onChange={onChange}
          />
          <DateInput
            placeholder="01"
            name="endDate"
            value={endDate}
            onChange={onChange}
          />
        </DateInputBox>
        <Label>목표 내용</Label>
        <Input
          placeholder="페퍼로니 피자 1판"
          marginBottom="10px"
          name="goalContents"
          value={goalContents}
          onChange={onChange}
        />
        <br />
        <Label>금액</Label>
        <Input
          placeholder="15,000"
          marginTop="5px"
          name="price"
          value={price === 0 ? null : price}
          onChange={onChange}
        />
      </form>
      <ModalButtonContainer>
        <ModalButton
          marginRight="10px"
          backgroundColor="#fff"
          onClick={handleSubmit}
        >
          등록
        </ModalButton>
        <ModalButton
          marginRight="10px"
          backgroundColor="#d9d9d9"
          onClick={handleCancel}
        >
          닫기
        </ModalButton>
      </ModalButtonContainer>
    </GlobalModal>
  );
}

export default GoalModal;
