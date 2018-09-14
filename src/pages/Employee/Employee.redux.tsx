import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";

export interface IInitialState {
  employee_list: any[];     // 员工列表
  one_employee_info: any;   // 单个员工信息
};

const initialState: IInitialState = {
  employee_list: [],
  one_employee_info: {},
};


export const SAVE_EMPLOYEE_LIST = 'SAVE_EMPLOYEE_LIST' as string;
export const SAVE_ONE_EMPLOYEE_INFO = 'SAVE_ONE_EMPLOYEE_INFO' as string;
export const SAVE_DELETE_ONE_EMPLOYEE = 'SAVE_DELETE_ONE_EMPLOYEE' as string;



export function saveEmployeeList(
  data: any,
): { type: string, payload: any } {
  return {
    type: SAVE_EMPLOYEE_LIST,
    payload: data,
  };
}

export function saveOneEmployeeInfo(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_ONE_EMPLOYEE_INFO,
    payload: data,
  };
}

export function saveDeleteOneEmployee(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_DELETE_ONE_EMPLOYEE,
    payload: data,
  };
}



export function EmployeePageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_EMPLOYEE_LIST: {
      return {
        ...state,
        employee_list: action.payload.employee_list,
      };
    }
    case SAVE_ONE_EMPLOYEE_INFO: {
      return {
        ...state,
        one_employee_info: action.payload.one_employee_info,
      };
    }
    case SAVE_DELETE_ONE_EMPLOYEE: {
      return {
        ...state,
        employee_list: state
          .employee_list
          .filter((item: any) => {
            return item.employeeId !== action.payload.deleted_employee_info.employeeId;
          }),
      };
    }
    default: {
      return state;
    }
  }
}


/**
 * 员工管理 分页获取
 * @param page 当前页数
 * @param pageSize 当前页显示条数
 * @param callback 回调
 */
export function reduxHandleGetEmployeeList(
  page: number,
  pageSize: number,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: '/employee/getemployeelist',
      jsonp: false,
      data: {
        page,
        pageSize,
      },
    }).then((res) => {
      res.code === 0
        && dispatch(saveEmployeeList(res.data));
      callback && callback();
    }); 
  };
}


/**
 * 员工管理 获取某个职工详细信息
 * @param employeeId 职工id
 * @param callback 回调
 */
export function reduxHandleGetOneEmployee(
  employeeId: string,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: '/employee/getoneinfo',
      jsonp: false,
      data: {
        employeeId,
      },
    }).then((res) => {
      dispatch(saveOneEmployeeInfo(res.data));
      callback && callback();
    });
  };
}


/**
 * 员工管理 删除单个员工
 * @param employeeId 删除的员工id
 * @param callback 回调
 */
export function reduxHandleDeleteOneEmployee(
  employeeId: string,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: '/employee/delete',
      jsonp: false,
      data: {
        employeeId,
      },
    }).then((res) => {
      dispatch(saveDeleteOneEmployee(res.data));
      callback && callback();
    });
  };
}


/**
 * 员工管理 新增员工
 * @param employeeId 员工id
 * @param employeeInfo 新建员工信息
 * @param callback 回调
 */
export function reduxHandleCreateOneEmployee(
  employeeId: string,
  employeeInfo: any,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>): void => {
    query({
      method: 'POST',
      url: '/employee/create',
      jsonp: false,
      data: {
        employeeId,
        employeeInfo,
      },
    }).then((res) => {
      console.log(res);
      callback && callback();
    });
  };
}




