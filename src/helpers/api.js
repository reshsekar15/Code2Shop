import axios from 'axios';
import sentry from './sentry';

const devOverride = false; // Use to force use of production in dev

const isLocalhost = Boolean((
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
));

const isDevWebsite = Boolean((
  window.location.hostname.match(/[dev. -dev dev-]/)
));

export const devMode = isLocalhost || isDevWebsite || devOverride;

export const apiLive = false;

function apiBaseUrl(endPoint) {
  if (apiLive) {
    return `http://localhost:3100/api/${endPoint}`;
  }

  return `http://localhost:3100/api/${endPoint}`;
}

const _get = (endPoint, params, idToken) => axios({
  url: apiBaseUrl(endPoint),
  method: 'GET',
  params,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-access-token': idToken
  },
});

const _post = (endPoint, data, idToken) => axios({
  url: apiBaseUrl(endPoint),
  method: 'POST',
  data,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': idToken
  }
});

const _put = (endPoint, data, idToken) => axios({
  url: apiBaseUrl(endPoint),
  method: 'PUT',
  data,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-access-token': idToken
  }
});

const _delete = (endPoint, params, idToken) => axios({
  url: apiBaseUrl(endPoint),
  method: 'DELETE',
  params,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-access-token': idToken
  }
});

export default {
  get: (endPoint, params, idToken) => {
    const startTime = new Date().getTime();
    return _get(endPoint, params, idToken).then((data) => {
      const breadCrumb = {
        endPoint,
        params,
        totalTime: (new Date().getTime() - startTime)
      };

      sentry.captureBreadcrumb(breadCrumb);
      return data.data;
    });
  },
  post: (endPoint, body, idToken) => {
    const startTime = new Date().getTime();
    return _post(endPoint, body, idToken).then((data) => {
      const breadCrumb = {
        endPoint,
        body,
        totalTime: (new Date().getTime() - startTime)
      };

      sentry.captureBreadcrumb(breadCrumb);
      return data.data;
    });
  },
  put: (endPoint, params, idToken) => {
    const startTime = new Date().getTime();
    return _put(endPoint, params, idToken).then((data) => {
      const breadCrumb = {
        endPoint,
        params,
        totalTime: (new Date().getTime() - startTime)
      };

      sentry.captureBreadcrumb(breadCrumb);
      return data.data;
    });
  },
  delete: (endPoint, params, idToken) => {
    const startTime = new Date().getTime();
    return _delete(endPoint, params, idToken).then((data) => {
      const breadCrumb = {
        endPoint,
        params,
        totalTime: (new Date().getTime() - startTime)
      };

      sentry.captureBreadcrumb(breadCrumb);
      return data.data;
    });
  },
};
