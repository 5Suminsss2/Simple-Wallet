import { useState } from "react";
import styled from "styled-components";

function CreateAccountHistory() {

  const [open, setOpen] = useState(false); // 거래내역 추가 버튼
  const [deposit, setDeposit] = useState(false); // 입출금 버튼

  // 입금 버튼 눌렀을 때
  const handleDeposit = () => {
    setDeposit(!deposit);
  };
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

  // form css
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
    <div>
      {open === true ? (
        <div>
          <CreateAccountHistoryContainer>
            <CreateAccountHistoryTitle>새 거래 내역</CreateAccountHistoryTitle>
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
          </CreateAccountHistoryContainer>
          <Button color="#fff">등록</Button>
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
