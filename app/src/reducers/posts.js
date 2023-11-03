import FETCH_ALL from "../constants/actionTypes";
import CREATE from "../constants/actionTypes";

const escrowsReducer = (escrows = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      //payload comes from posts.js in ../src/action
      return action.payload;

    case CREATE:
      return [...escrows, action.payload];

    default:
      return escrows;
  }
};
export default escrowsReducer;
