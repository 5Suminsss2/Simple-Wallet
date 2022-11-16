// 그래프 차트 시각화 코드 
// 참조 코드 : https://github.com/sypear/my-pocket"

import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { useEffect } from "react";

const ChartContainer = styled.div`
  height: 200px;
  width: 340px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
`;

function GraphAccount({ dataset }) {
  const today = new Date(); // 오늘 날짜

  // 차트에 입력할 데이터
  const monthData = [
    { month: "1", totalDeposit: 0, totalWithdraw: 0 },
    { month: "2", totalDeposit: 0, totalWithdraw: 0 },
    { month: "3", totalDeposit: 0, totalWithdraw: 0 },
    { month: "4", totalDeposit: 0, totalWithdraw: 0 },
    { month: "5", totalDeposit: 0, totalWithdraw: 0 },
    { month: "6", totalDeposit: 0, totalWithdraw: 0 },
    { month: "7", totalDeposit: 0, totalWithdraw: 0 },
    { month: "8", totalDeposit: 0, totalWithdraw: 0 },
    { month: "9", totalDeposit: 0, totalWithdraw: 0 },
    { month: "10", totalDeposit: 0, totalWithdraw: 0 },
    { month: "11", totalDeposit: 0, totalWithdraw: 0 },
    { month: "12", totalDeposit: 0, totalWithdraw: 0 },
  ];

  useEffect(() => {
    // 올해 연도의 데이터만 가져오기
    const filterDataset = dataset.filter(
      (value) => Number(value.year) === today.getFullYear()
    );

    // monthData에 값 더하기
    filterDataset.map((value) => {
      const month = Number(value.month) - 1;
      if (value.accountType === "Deposit") {
        monthData[month].totalDeposit += Number(value.price);
      } else {
        monthData[month].totalWithdraw += Number(value.price);
      }
    });
  }, [monthData]);

  return (
    <ChartContainer>
      <div>{today.getFullYear()}년 월별 그래프</div>
      <ResponsiveBar
        data={monthData}
        keys={["totalWithdraw", "totalDeposit"]}
        indexBy="month"
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ theme: "background" }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </ChartContainer>
  );
}

export default GraphAccount;
