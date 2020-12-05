import axios from 'axios';
import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  SET_FILTER,
} from '../constants/usersConstants';

export const listUsers = () => {
  return dispatch => {
    dispatch({ type: USERS_LIST_REQUEST });
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(res => {
        dispatch({ type: USERS_LIST_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: USERS_LIST_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const setFilter = (val) => {
  return dispatch => {
    dispatch({ type: SET_FILTER, payload: val });
  };
};
