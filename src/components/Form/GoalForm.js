import styled from "styled-components";

function GoalForm() {

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

  return (
    <form>
      <Label>시작 날짜</Label>
      <DateInputBox>
        <DateInput placeholder="2023" />
        <DateInput placeholder="01" />
        <DateInput placeholder="01" />
      </DateInputBox>
      <Label>목표 날짜</Label>
      <DateInputBox>
        <DateInput placeholder="2023" />
        <DateInput placeholder="02" />
        <DateInput placeholder="01" />
      </DateInputBox>
      <Label>목표 내용</Label>
      <Input placeholder="페퍼로니 피자 1판" marginBottom="10px" />
      <br />
      <Label>금액</Label>
      <Input placeholder="15,000" marginTop="5px" />
    </form>
  );
}

export default GoalForm;
