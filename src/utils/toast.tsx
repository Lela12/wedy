import { message } from 'antd';

const Toast = (type: string, msg: string) => {
  if (type === 'error') {
    message.error(msg);
  } else {
    message.success(msg);
  }
};
export default Toast;
