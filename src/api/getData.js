import axios from "axios";

export const getAccountHistory = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/accountHistoryData`);
  return response.data;
};

export const getGoalData = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/goalData`);
  return response.data;
};

export const getAlarmData = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/alarmData`);
  return response.data;
};
