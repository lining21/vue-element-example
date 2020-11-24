import validUrl from 'valid-url';
import { str2Time } from '@/utils/index';

/* 合法url */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 手机号 */
export function validateMobilephone(str) {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

/* 座机 */
export function validateTelephone(str) {
  const reg = /^0\d{2,3}-?\d{7,8}$/;
  return reg.test(str);
}

/* 座机 */
export function validateTelephoneAndMobilePhone(str) {
  const reg = /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/;
  return reg.test(str);
}

/* 自然数 */
export function validateNaturalNumber(str) {
  const reg = /^(|0|[1-9][0-9]*)$/;
  return reg.test(str);
}

/* 正实数 */
export function validateArithmeticNumber(str) {
  const reg = /^(?:[1-9]\d*|0)(?:\.\d+)?$/;
  return reg.test(str);
}
/* 正整数 */
export function validatePositiveIntegers(str) {
  const reg = /^[1-9]\d*$/;
  return reg.test(str);
}

/* 浮点数（含0） */
export function validateFloat(str) {
  const reg = /^(0|[+-]?((0|([1-9]\d*))\.\d+)?)$/;
  return reg.test(str);
}

/* 自然小数（含0，保留2位小数） */
export function validateNaturalFloat2(str) {
  if (Number(str) <= 0) {
    return false;
  }
  const reg = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/;
  return reg.test(str);
}

// 校验字符长度
export function validateStringLength(str, minLength = 0, maxLength) {
  if (str === null || str === undefined) {
    str = '';
  } else if (typeof str !== 'string') {
    str += '';
  }
  // const reg = /[\u0391-\uFFE5]/g;
  // let len = str.replace(reg, "01").length;
  const len = str.length;
  return len >= minLength && len <= maxLength;
}

// 校验特殊字符
export function validateSpecialCharacters(str) {
  if (str === null || str === undefined) {
    str = '';
    str = '';
  } else if (typeof str !== 'string') {
    str += '';
  }
  const reg = /[`~!@:?";()…！—·=【】：、，。,.《》？；（）“”‘’|#￥$%^&*_+<>\\{}/'[\]-\s]/im;
  return !reg.test(str);
}

// 校验起始时间
export function validateStartAndEndTime(startTimeStr, endTimeStr) {
  const startDate = str2Time(startTimeStr);
  const endDate = str2Time(endTimeStr);
  return startDate.getTime() < endDate.getTime();
}

// 校验身份证格式
export function validIdNumber(str) {
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  return reg.test(str);
}

// 校验邮箱格式
export function validEmail(str) {
  const reg = /^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(str);
}

// 校验url是否合法
export function validEUrl(str) {
  // const reg = new RegExp('^((https|http|ftp|rtsp|mms)?://)'
  // + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' // ftp的user@
  // + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
  // + '|' // 允许IP和DOMAIN（域名
  // + '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
  // + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
  // + '[a-z]{2,6})' // first level domain- .com or .museum
  // + '(:[0-9]{1,4})?' // 端口- :80
  // + '((/?)|' // a slash isn't required if there is no file name
  // + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$');
  return validUrl.isUri(str);
}

// 校验密码只能输入数字字母下划线
export function validPasswordType(str) {
  const reg = /^\w{6,18}$/ig;
  return reg.test(str);
}

// 校验密码强度
export function validPasswordStrength(str) {
  const reg1 = /[a-z]/;
  const reg2 = /[A-Z]/;
  const reg3 = /[\d_]/;
  return (reg1.test(str) && reg2.test(str)) || (reg1.test(str) && reg3.test(str)) || (reg2.test(str) && reg3.test(str));
}

// 校验密码是否符合标准
export const validPasswordStandard = str => /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/.test(str);

// 校验邮编
export function validPostCode(str) {
  const reg = /^[0-9]{6}$/;
  return reg.test(str);
}
