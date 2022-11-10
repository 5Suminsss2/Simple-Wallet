// atom.js
import { atom } from "recoil";

 let alarmModalState = atom({
  key: "alarmModal",
  default: false,
});

 let goalModalState = atom({
  key: "goalModal",
  default: false,
});

export {alarmModalState, goalModalState};
