import './polyfill';
import dva from 'dva';

import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import 'moment/locale/zh-cn';
import { message } from 'antd';
import './rollbar';
import router from './router';

import 'loaders.css/loaders.css';
import './index.less';
import './theme/skin.less';

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  },
  onAction: createLogger(),
});

app.use(createLoading());

app.model(require('./models/global').default);

app.router(router);

app.start('#root');

export default app._store; // eslint-disable-line
