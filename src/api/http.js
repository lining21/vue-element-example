import Vue from 'vue';
import axios from 'axios';
import { message } from 'element-ui';
import vm from '../main';
/*  拦截器
 *  请求成功 状态码 2xx
 *
 */
Vue.prototype.$baseURL = `${window.location.protocol}//${window.location.host}/amos`;
function success(res) {
  // 预览文件路径修改
  if (res.config.url === '/sfss/space/previewPublicFile') { return res; }
  // 普通接口
  if (res.data && res.data.status === '1') { return res.data; }
  message.error(res.data.message);
  return Promise.reject(res);
}
/**
 * 拦截器
 * 请求出错 状态码4xx 5xx 或者 2xx但是执行success方法出错
 */
function error(err) {
  // 防止插图加载不出来报错。
  if (err.config.url === '/sfss/space/previewPublicFile') { return; }
  message.error(err.response.data.message);
  return Promise.reject(err);
}
const http = axios.create({
  baseURL: Vue.prototype.$baseURL,
  headers: {
    'Content-type': 'application/json'
  }
});
// http请求response拦截器（预处理返回值）
http.interceptors.response.use(success, error);
export default http;
