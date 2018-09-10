

/**
 * 获取随机数
 * @param min 最低取值范围
 * @param max 最高取值范围
 * @returns 随机整数
 */
export function _random(min: number, max: number): number {
  return ~~(Math.random()*(max-min)+min);
}


/**
 * 判断是否数组
 * @param param 任意对象
 */
export function _isArray(param: any): boolean {
  return ({}).toString.call(null, param) === '[object Array]';
}