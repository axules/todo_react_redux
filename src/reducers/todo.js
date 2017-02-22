import types from '../actions/allTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.TODO_SAVE:
    case types.TODO_ADD: 
      return {
        ...state,
        [action.uid]: {
          name: action.name,
          text: action.text,
          uid: action.uid,
          state: 1,
        },
      };
    
    case types.TODO_REMOVE: 
      delete state[action.uid];
      return {
        ...state,
      };
    
    case types.TODO_COMPLETE: 
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          state: 9,
        },
      };
    
    default:
      return state;
  }
};