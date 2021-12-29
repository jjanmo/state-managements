import produce from 'immer';
import * as MESSAGE from '../actions/message';

const initialState = {
  message: '',
};

export default function (preState = initialState, action) {
  const { type, payload } = action;

  return produce(preState, (draft) => {
    switch (type) {
      case MESSAGE.SET_MESSAGE: {
        draft.message = payload;
        break;
      }
      case MESSAGE.CLEAR_MESSAGE: {
        draft.message = '';
        break;
      }
      default: {
        return preState;
      }
    }
  });
}
