import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";



export interface IInitialState {
  isAuth: boolean;      // 权限
  message: string | '';   // 报错信息
  adminname: string | ''; // 管理员昵称
};


const initialState: IInitialState = {
  isAuth: false,
  message: '',
  adminname: '',
};


const AUTH_SUCCESS = 'AUTH_SUCCESS' as string;
const ERR_MESSAGE = 'ERR_MESSAGE' as string;
const SAVE_ADMIN_INFO = 'SAVE_ADMIN_INFO' as string;



// 加载Admin信息
export function saveAdminInfo(data: any): { type: string, payload: any } {
  return {
    type: SAVE_ADMIN_INFO,
    payload: data,
  };
}


// 验证成功
export function authSuccess(data: any): { type: string, payload: any } {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
}

// 报错信息
export function errMessage(data: string): { type: string, payload: string } {
  return {
    type: ERR_MESSAGE,
    payload: data,
  };
}



export function LoginPageReducer(
  state: IInitialState = initialState, 
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: localStorage.hasOwnProperty('admin'),
        adminname: action.payload.admin.adminname,
      };
    case ERR_MESSAGE:
      return {
        ...state,
        isAuth: false,
        message: action.payload.message,
      };
    case SAVE_ADMIN_INFO:
      return {
        ...state,
        adminname: action.payload.adminname,
      };
    default:
      return state;
  }
}



// 登录
export function checkLogin(
  data: { adminname: string, adminpwd: string, remember: boolean }
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ method: 'POST', data: { ...data }, jsonp: false, url: '/login' })
      .then((res) => {
        localStorage.setItem('admin', res.data.admin.adminname);
        dispatch(authSuccess(res.data));
      });
  };
}



// 加载管理员信息
export function getAdminInfo() {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ url: '/admin/info', method: 'GET', jsonp: false })
      .then((res) => {
        res.code === 0
          && dispatch(saveAdminInfo(res.data));
      });
  };
}