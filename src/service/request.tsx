import axios from 'axios';
import jsonp from 'jsonp';


export interface IQueryProps {
  url: string;
  method: string;
  data?: any;
  token?: string | '',
  jsonp: boolean;
};


/**
 * axios请求
 * @param options object 配置参数
 * @returns Promise
 */
export function query(options: IQueryProps): Promise<any> {
  return new Promise((resolve, reject) => {
  
    if(options.jsonp) {
      jsonp(options.url, { param: 'callback' }, (err, data) => {
        data.status === 200
          ? resolve(data)
          : reject(err);
      })
    }else {
      // 全局 Loading
      // const loadingWrapper = document.querySelector('.loadingWrapper') as HTMLDivElement;
      
      // if(loadingWrapper) {
      //   loadingWrapper.style.display = 'block';
      // }

      axios({
        method: options.method,
        url: options.url,
        headers: {
          Authorization: `Bearer ${options.token}`,
        },
        data: options.method === 'POST' && options.data,
        params: options.method === 'GET' && options.data,
      }).then((res) => {
        // 关闭loading
        // if(loadingWrapper) {
        //   loadingWrapper.style.display = 'none';
        // }
        if(res.status === 200) {
          resolve(res.data);
        }
      })
        .catch((err) => { reject(err) });
    }
  });
}
