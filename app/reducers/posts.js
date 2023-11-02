import { FETCH_ALL, CREATE, FETCH_APPROVED } from "../constants/actionTypes";

export default (escrows = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      //payload comes from posts.js in ../src/action
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    case FETCH_APPROVED:
      return escrows.filter(
        (escrow) => escrow.arbiter.toLowerCase() === signer.toLowerCase()
      );

    default:
      return escrows;
  }
};
