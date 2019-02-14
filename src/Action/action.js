import { COMMON_ACTION } from './type';


export function commonAction (data) {
    return (dispatch, getState) => {
        dispatch({
          type: COMMON_ACTION,
          payload:data
        })
    }
  }