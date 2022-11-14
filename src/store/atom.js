// atom.js
import { atom } from "recoil";
import accountHistoryData from "../data/accountHistoryData.json";

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

export { alarmModalState, goalModalState, datasetState };
