import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";


export interface IInitialState {
  manager_list: any[];      // 管理者列表
};


const initialState: IInitialState = {
  manager_list: [],
};


export const SAVE_MANAGER_LIST = 'SAVE_MANAGER_LIST' as string;
export const SAVE_DELETED_MANAGER_INFO = 'SAVE_DELETED_MANAGER_INFO' as string;
export const SAVE_UPDATED_MANAGER_CURRENT_AUTHORIZED = 'SAVE_UPDATED_MANAGER_CURRENT_AUTHORIZED' as string;
export const SAVE_NEW_MANAGER_INFO = 'SAVE_NEW_MANAGER_INFO' as string;



export function saveManagerList(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_MANAGER_LIST,
    payload: data,
  };
}

export function saveDeletedManager(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_DELETED_MANAGER_INFO,
    payload: data,
  };
}

export function saveUpdatedCurrentAuthorized(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_UPDATED_MANAGER_CURRENT_AUTHORIZED,
    payload: data,
  };
}

export function saveNewManagerInfo(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_NEW_MANAGER_INFO,
    payload: data,
  };
}



export function PermissionPageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_MANAGER_LIST: {
      return {
        ...state,
        manager_list: action.payload.manager_list,
      };
    }
    case SAVE_DELETED_MANAGER_INFO: {
      return {
        ...state,
        manager_list: state
          .manager_list
          .filter((item) => {
            return item.managerId !== action
              .payload
              .deleted_manager_info
              .managerId;
          }),
      };
    }
    case SAVE_UPDATED_MANAGER_CURRENT_AUTHORIZED: {
      return {
        ...state,
        manager_list: state
          .manager_list
          .map((item) => {
            return item.managerId === action.payload.updated_manager_info.managerId
              ? {
                  ...item,
                  managerCurrentAuthorized: action.payload.updated_manager_info.managerCurrentAuthorized,
                }
              : item;
          }),
      };
    }
    case SAVE_NEW_MANAGER_INFO: {
      return {
        ...state,
        manager_list: [
          action.payload.new_manager_info,
          ...state.manager_list,
        ],
      };
    }
    default: {
      return state;
    }
  }
}


/**
 * 分页获取管理者列表
 * @param page 当前页数
 * @param pageSize 当前页显示条数
 * @param callback 回调
 */
export function reduxHandleGetManagerList(
  page: number,
  pageSize: number,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: '/permission/manager/list',
      jsonp: false,
      data: {
        page,
        pageSize,
      },
    }).then((res) => {
      dispatch(saveManagerList(res.data));
      callback && callback();
    });
  };
}


/**
 * 删除管理者
 * @param managerId 管理者id
 * @param callback 回调
 */
export function reduxHandleDeleteManager(
  managerId: string,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>): void => {
    query({
      method: 'GET',
      url: '/permission/manager/delete',
      jsonp: false,
      data: {
        managerId,
      },
    }).then((res) => {
      dispatch(saveDeletedManager(res.data));
      callback && callback();
    });
  };
}


/**
 * 修改管理者权限
 * @param managerId 管理者id
 * @param managerCurrentAuthorized 新的权限值
 * @param callback 回调
 */
export function reduxHandleEditAuthorized(
  managerId: string,
  managerCurrentAuthorized: string,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>): void => {
    query({
      method: 'POST',
      url: '/permission/manager/edit/authorize',
      jsonp: false,
      data: {
        managerId,
        managerCurrentAuthorized,
      },
    }).then((res) => {
      dispatch(saveUpdatedCurrentAuthorized(res.data));
      callback && callback();
    });
  };
}


/**
 * 新建管理者
 * @param managerInfo 新建的管理者信息
 * @param callback 回调
 */
export function reduxHandleCreateManager(
  managerInfo: any,
  callback?: () => void,
): (dispatch: ThunkDispatch<any, any, any>) => void {
  return (dispatch: ThunkDispatch<any, any, any>): void => {
    query({
      method: 'POST',
      url: '/permission/manager/create',
      jsonp: false,
      data: {
        managerInfo,
      },
    }).then((res): void => {
      dispatch(saveNewManagerInfo(res.data));
      callback && callback();
    })
  }
}


