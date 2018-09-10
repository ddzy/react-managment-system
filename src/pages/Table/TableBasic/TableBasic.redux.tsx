import { ThunkDispatch } from "redux-thunk";
import { query } from "../../../service/request";

interface IInitialState {
  employees: object[],
};


const initialState: IInitialState = {
  employees: [],
};


export const ADD_EMPLOYEES = 'ADD_EMPLOYEES';


export function addEmployees(data: any): { type: string, payload: any } {
  return { type: ADD_EMPLOYEES, payload: data };
}


export function TableBasicReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case ADD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload.employees,
      };
    default:
      return state;
  }
}


/**
 * 获取员工列表 
 */
export function getEmployees() {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ method: 'GET', url: '/table/basic', jsonp: false })
      .then((res) => {
        res.code === 0 && dispatch(addEmployees(res.data.data));
      });
  }
}