import { useState } from "react";
import styled from "styled-components";
import GlobalModal from "./GlobalModal";

function AlarmModal() {
  const [deposit, setDeposit] = useState(false); // 입출금 버튼

  // 입금 버튼 눌렀을 때
  const handleDeposit = () => {
    setDeposit(!deposit);
  };

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

  const ContentButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ContentButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 40px;
    margin: 5px 0 10px 0;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: ${(props) => props.color || "#fff"};
    cursor: pointer;
    &:hover {
      background-color: grey;
    }
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

  return (
    <GlobalModal title="알람 설정" icon="alarm">
      <form>
        <Label>날짜</Label>
        <DateInputBox>
          <DateInput placeholder="2023" />
          <DateInput placeholder="01" />
          <DateInput placeholder="01" />
        </DateInputBox>
        <Label>내용</Label>
        {deposit === true ? (
          <ContentButtonBox>
            <ContentButton onClick={handleDeposit} color="grey" disabled>
              입금
            </ContentButton>
            <ContentButton onClick={handleDeposit}>출금</ContentButton>
          </ContentButtonBox>
        ) : (
          <ContentButtonBox>
            <ContentButton onClick={handleDeposit}>입금</ContentButton>
            <ContentButton onClick={handleDeposit} color="grey" disabled>
              출금
            </ContentButton>
          </ContentButtonBox>
        )}
        <Input placeholder="페퍼로니 피자 1판" marginBottom="10px" />
        <br />
        <Label>금액</Label>
        <Input placeholder="15,000" marginTop="5px" />
      </form>
    </GlobalModal>
  );
}

export default AlarmModal;
