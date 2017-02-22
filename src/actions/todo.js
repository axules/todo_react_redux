import types from './allTypes';
import {guidCustom} from '../services/utils';

export const todoAdd = (name, text) => (dispatch) => {
  dispatch({
    type: types.TODO_ADD,
    name,
    text,
    uid: guidCustom(),
  });
};

export const todoSave = (uid, name, text) => (dispatch) => {
  dispatch({
    type: types.TODO_SAVE,
    name,
    text,
    uid: uid,
  });
};

export const todoRemove = (uid) => (dispatch) => {
  dispatch({
    type: types.TODO_REMOVE,
    uid,
  });
};

export const todoComplete = (uid) => (dispatch) => {
  dispatch({
    type: types.TODO_COMPLETE,
    uid,
  });
};