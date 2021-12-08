# vue-uploader-files

## 安装
```
npm install vue-uploader-files
```

### main.js引入
```
import upfile from 'vue-uploader-files';
import 'vue-uploader-files/lib/vue-uploader-files.css';
Vue.use(upfile);
```

### 使用
```
<up-file @upfile="upfile"></up-file>
```

### Attribute

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| styleSwitch  | 是否使用样式(不包含背景色和文字颜色) | Boolean | true,false | true |
| fileName  | 上传的文件字段名 | String | — | file |
| text  | 提示说明文字 | String | — | 选择文件 |
| backgroundColor  | 背景颜色 | String | — | #0096fa |
| color  | 文本颜色 | String | — | #f5f5f5 |

### Methods

|  方法名   | 说明  | 参数  |
|  ----  | ----  | ----  |
|  upfile   | 返回数据  | (formdata:返回的FormData数据)  |

### slot

|  name   | 说明  |
|  ----  | ----  |
|  trigger  |  扩容(拓展)  |
