export const getIsLoggedIn = () => {
  if (getCookie("token").length > 2) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJiNzQ5YTRjOS0wMWY0LTRjYzgtYjM4Ny0zMzFmNzE3NDQzMWQiLCJleHAiOjE2MTg0OTYwMzR9.GtHcsbS7Dt_XbR9Rsx_N_WMzN1EMYluxjcaHHrWnGBw";
};

export const getApiURL = () => {
  return "https://pikaia.azurewebsites.net/";
};

export const getCookie = (c_name) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
};
