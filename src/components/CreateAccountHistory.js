import { useState } from "react";
import styled from "styled-components";
import SubmitForm from "./Form/SubmitForm";

function CreateAccountHistory() {

  const [open, setOpen] = useState(false); // 거래내역 추가 버튼

  // 새 거래내역 추가 버튼 눌렀을 때
  const handleAddHistory = () => {
    setOpen(true);
  };

  // 새 거래내역 닫기 버튼 눌렀을 때
  const handleCancel = () => {
    setOpen(false);
  };

  // CSS
  const CreateAccountHistoryContainer = styled.div`
    width: 340px;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: #d9d9d9;
  `;

  const CreateAccountHistoryTitle = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 40px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    &:hover {
      background-color: grey;
    }
  `;

 

  return (
    <div>
      {open === true ? (
        <div>
          <CreateAccountHistoryContainer>
            <CreateAccountHistoryTitle>새 거래 내역</CreateAccountHistoryTitle>
            <SubmitForm />
          </CreateAccountHistoryContainer>
          <Button color="#fff">
            등록
          </Button>
          <Button onClick={handleCancel} color="#d9d9d9">
            닫기
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddHistory}>새 거래내역 추가</Button>
      )}
    </div>
  );
}

export default CreateAccountHistory;
