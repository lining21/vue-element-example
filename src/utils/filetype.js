
// 根据文件名后缀区分 文件类型
/*
    * @param: fileName - 文件名称
    * 通过返回的字符串来进行匹配
    */
const FILE_TYPE_MAP = {
  image: require('@/assets/tc/action_item/jpg2.png'),
  excel: require('@/assets/tc/action_item/excel2.png'),
  word: require('@/assets/tc/action_item/word2.png'),
  pdf: require('@/assets/tc/action_item/pdf2.png'),
  other: require('@/assets/tc/action_item/other2.png'),
  zip: require('@/assets/tc/action_item/other2.png'),
  doc: require('@/assets/tc/action_item/word2.png'),
  docx: require('@/assets/tc/action_item/word2.png'),
  xls: require('@/assets/tc/action_item/excel2.png'),
  xlsx: require('@/assets/tc/action_item/excel2.png')
};

/**
 * 文件类型-图标索引
 * 0 文件夹
 * 1 PDF文件
 * 2 Word文件
 * 3 Excel文件
 * 4 JPG文件
 * 5 其他类型
 * 6 会议
 */
const FILE_TYPE_MAP_EVLIST = {
  0: require('@/assets/knowledge_base/list_icon_file.png'),
  1: require('@/assets/tc/action_item/pdf2.png'),
  2: require('@/assets/tc/action_item/word2.png'),
  3: require('@/assets/tc/action_item/excel2.png'),
  4: require('@/assets/tc/action_item/jpg2.png'),
  5: require('@/assets/tc/action_item/other2.png')
};
const matchType = (fileName) => {
  // 后缀获取
  let suffix = '';
  // 获取类型结果
  let result = '';
  try {
    const flieArr = fileName.split('.');
    suffix = flieArr[flieArr.length - 1].toLowerCase();
  } catch (err) {
    suffix = '';
  }
  // fileName无后缀返回 false
  if (!suffix) {
    result = false;
    return result;
  }
  // 图片格式
  const imglist = ['png', 'jpg', 'jpeg', 'gif'];
  // 进行图片匹配
  result = imglist.some(item => item === suffix);
  if (result) {
    result = 'image';
    return result;
  }
  // 匹配txt
  //   const txtlist = ['txt'];
  //   result = txtlist.some(item => item === suffix);
  //   if (result) {
  //     result = 'txt';
  //     return result;
  //   }
  // 匹配 excel
  const excelist = ['xls', 'xlsx'];
  result = excelist.some(item => item === suffix);
  if (result) {
    result = 'excel';
    return result;
  }
  // 匹配 word
  const wordlist = ['doc', 'docx'];
  result = wordlist.some(item => item === suffix);
  if (result) {
    result = 'word';
    return result;
  }
  // 匹配 pdf
  const pdflist = ['pdf'];
  result = pdflist.some(item => item === suffix);
  if (result) {
    result = 'pdf';
    return result;
  }
  // 匹配 ppt
  const pptlist = ['ppt', 'pptx'];
  result = pptlist.some(item => item === suffix);
  if (result) {
    result = 'ppt';
    return result;
  }
  // 匹配 视频
  //   const videolist = ['mp4', 'm2v', 'mkv'];
  //   result = videolist.some(item => item === suffix);
  //   if (result) {
  //     result = 'video';
  //     return result;
  //   }
  // 匹配 音频
  //   const radiolist = ['mp3', 'wav', 'wmv'];
  //   result = radiolist.some(item => item === suffix);
  //   if (result) {
  //     result = 'radio';
  //     return result;
  //   }
  // 匹配 压缩包
  const zipList = ['zip', 'rar'];
  result = zipList.some(item => item === suffix);
  if (result) {
    result = 'zip';
    return result;
  }
  // 其他 文件类型
  result = 'other';
  return result;
};
const fileImage = type => FILE_TYPE_MAP[type];
/**
 * @description 根据文件类型获取文件的图标
 * @param {Number} type 文件类型
 * @returns {Base64}
 * @author zhangyanru
 */
const evidenceImage = type => FILE_TYPE_MAP_EVLIST[type] || FILE_TYPE_MAP_EVLIST[2];// 证据列表页的文件类型缩放图
export { matchType, fileImage, evidenceImage };
