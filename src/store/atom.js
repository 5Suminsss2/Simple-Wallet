// atom.js
import { atom } from "recoil";
import accountHistoryData from "../data/accountHistoryData.json";
import goalData from "../data/goalData.json";
import alarmData from "../data/alarmData.json";

// 알람 모달 
 let alarmModalState = atom({
  key: "alarmModal",
  default: false,
});

// 목표 모달
 let goalModalState = atom({
  key: "goalModal",
  default: false,
});

//입출금 내역
let datasetState = atom({
  key: "dataset",
  default: accountHistoryData["accountHistoryData"],
});

// 목표 데이터
let goalDatasetState = atom({
  key: "goalDataset",
  default: goalData["goalData"],
});

// 알람 데이터
let alarmDatasetState = atom({
  key: "alarmDataset",
  default: alarmData["alarmData"],
});

// 총 금액 데이터
let totalState = atom({
  key: "totalState",
  default: 0
})

export {
  alarmModalState,
  goalModalState,
  datasetState,
  goalDatasetState,
  alarmDatasetState,
  totalState,
};
