import Rollbar from 'rollbar';

// Track error by rollbar.com
Rollbar.init({
  accessToken: 'e3205cb4380b4e5d94b7af403d8ac3cc',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
  },
});
