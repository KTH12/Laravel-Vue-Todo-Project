export default function (Vue) {
  const VueVm = Vue;
  VueVm.auth = {
    setToken(token, expiration, $http) {
      const http = $http;
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    getToken() {
      const token = localStorage.getItem('token');
      const expiration = localStorage.getItem('expiration');
      if (!token || !expiration) {
        return null;
      }

      if (Date.now() > parseInt(expiration, 10)) {
        this.destroyToken();
        return null;
      }
      return token;
    },

    destroyToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },

    isAuthenticated() {
      if (this.getToken()) {
        return true;
      }
      return false;
    },
  };

  Object.defineProperties(VueVm.prototype, {
    $auth: {
      get() {
        return VueVm.auth;
      },
    },
  });
}
