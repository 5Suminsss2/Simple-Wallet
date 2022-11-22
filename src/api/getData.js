import axios from "axios";

export const getAccountHistory = async () => {
  const response = await axios.get("http://localhost:4000/accountHistoryData");
  return response.data;
};

export const getGoalData = async () => {
  const response = await axios.get("http://localhost:4000/goalData");
  return response.data;
};

export const getAlarmData = async (id) => {
  const response = await axios.get(`http://localhost:4000/alarmData`);
  return response.data;
};
