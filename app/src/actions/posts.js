import FETCH_ALL from "../constants/actionTypes";
import CREATE from "../constants/actionTypes";
import * as api from "../api/index.js";

//Action Creators - functions that return actions

export const getEscrow = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEscrow();

    //with redux thunk instead of returning the action you have to dispatch the action
    //we can use dispatch because we implemented redux in the app.js
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createEscrow = (newEscrow) => async (dispatch) => {
  try {
    const { data } = await api.createEscrow(newEscrow);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    const errorInfo = {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
    console.log(errorInfo);
  }
};
