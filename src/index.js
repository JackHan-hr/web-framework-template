import './polyfill';
import dva from 'dva';

import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import 'moment/locale/zh-cn';
import { message } from 'antd';
import './rollbar';

import models from './models';
import router from './router';

import './index.less';
import './theme/skin.less';

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  },
});

app.use(createLoading());

models.forEach(m => app.model(m));

app.router(router);

app.start('#root');
