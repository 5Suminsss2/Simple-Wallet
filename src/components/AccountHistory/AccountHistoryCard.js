import styled from "styled-components";

function AccountHistoryCard({data}) {

    // 화폐 3자리마다 콤마 넣기
    const price = Number(data.price).toLocaleString("ko-KR");
    
    // CSS
    const AccountHistoryDetail = styled.div`
        height: 55px;
        margin-bottom: 10px;
        padding: 0 10px;
        font-size: 14px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    `;

    const AccountHistoryDate = styled.div`
        padding: 5px 0;
        font-size: 11px;
    `;

    const AccountHistoryContents = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    return (
        <AccountHistoryDetail>
        <AccountHistoryDate>{data.year}-{data.month}-{data.date}</AccountHistoryDate>
        <AccountHistoryContents>
            <div>{data.accountContents}</div>
            {data.accountType === "Deposit" ? (
            <div>+ {price} 원</div>
            ) : (
            <div>- {price} 원</div>
            )}
        </AccountHistoryContents>
        </AccountHistoryDetail>
    );
}

export default AccountHistoryCard;