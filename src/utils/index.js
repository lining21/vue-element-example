// import downloadjs from 'downloadjs';
import CryptoJS from 'crypto-js';

/**
 * 文件类型-图标索引
 * 0 文件夹
 * 1 PDF文件
 * 2 Word文件
 * 3 Excel文件
 * 4 JPG文件
 * 5 其他类型
 */
const FILE_TYPE_MAP = {
  0: require('@/assets/knowledge_base/list_icon_file.png'),
  1: require('@/assets/knowledge_base/list_icon_pdf.png'),
  2: require('@/assets/knowledge_base/list_icon_word.png'),
  3: require('@/assets/knowledge_base/list_icon_excel.png'),
  4: require('@/assets/knowledge_base/list_icon_jpg.png'),
  5: require('@/assets/knowledge_base/list_icon_noname.png'),
  continent: require('@/assets/knowledge_base/list_icon_continent.png'),
  country: require('@/assets/knowledge_base/list_icon_country.png')
};

/**
 * @description 根据文件类型获取文件的图标
 * @param {Number} type 文件类型
 * @returns {Base64}
 * @author yujie
 */
const getIconByType = type => FILE_TYPE_MAP[type] || FILE_TYPE_MAP[5];

/**
 * 前端AEC加密
 * @param {String Number} fileId
 */
const encrypt = (fileId) => {
  const key = CryptoJS.enc.Utf8.parse('qdcaresamos@net1');
  const srcs = CryptoJS.enc.Utf8.parse(fileId);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  const hexStr = encrypted.ciphertext.toString().toUpperCase();
  return hexStr;
};

/**
 * @description 下载(被挂载在Vue.prototype上)
 * @param {string} ids 下载文件文件夹，id以逗号隔开
 * @returns {void}
 * @author yujie
 */
const download = (ids) => {
  // downloadjs(`${process.env.VUE_APP_URL}/space/downloadFile?id=${ids}`);
  // window.open(`${process.env.VUE_APP_URL}/space/downloadFile?id=${ids}`, '_blank');
  const encryptWord = encrypt(ids);
  window.open(`/amos/sfss/space/downloadFile?id=${encryptWord}`, '_blank');
};
// 当先页面下载的方法
const selfDownload = (ids, fileName) => {
  const link = document.createElement('a');
  link.style.display = 'none';
  const encryptWord = encrypt(ids);
  link.href = `amos/sfss/space/downloadFile?id=${encryptWord}`;
  // 获取文件名
  // download 属性定义了下载链接的地址而不是跳转路径
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};
/**
 * @description 字符串转换Date类型
 * @param {String} str-时间字符串 例:'2018-08-08'
 * @returns {Date} Date对象
 * @author caoyulong
 */
const str2Time = str => new Date(Date.parse(str.replace(/-/g, '/')));

/**
 * 旧方式存储localstorage
 * @param {String} name
 * @param {String} val
 */
const setLocalStorage = (name, val) => {
  localStorage.setItem(name, val);
};

/**
 * 旧方式获取localstorage
 * @param {String} name
 * @param {String} val
 */
const getLocalStorage = name => localStorage.getItem(name);

/**
 * 新方式存储localstorage
 * @param {String} name  保证是string
 * @param {*} val  随意 存的什么返回是什么
 */
const setLocalStorageNew = (name, val) => {
  localStorage.setItem(name, JSON.stringify(val));
};

/**
 * 新方式获取localstorage
 * @param {String} name
 */
const getLocalStorageNew = name => JSON.parse(localStorage.getItem(name));

export {
  getIconByType, download, str2Time, selfDownload, setLocalStorage, getLocalStorage, setLocalStorageNew, getLocalStorageNew, encrypt
};
