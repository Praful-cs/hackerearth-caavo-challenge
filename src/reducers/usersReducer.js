import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  SET_FILTER,
} from '../constants/usersConstants';

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
  case USERS_LIST_REQUEST:
    return { loading: true, users: [] };
  case USERS_LIST_SUCCESS:
    return { loading: false, users: action.payload };
  case USERS_LIST_FAIL:
    return { loading: false, error: action.payload };
  case SET_FILTER:
    // eslint-disable-next-line no-case-declarations
    const arr = [...state.users];
    if (action.payload == 'ascending') {
      arr.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
    } else if (action.payload == 'descending') {
      arr.sort((a, b) => {
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
      });
    }
    return { users: arr };

  default:
    return state;
  }
};