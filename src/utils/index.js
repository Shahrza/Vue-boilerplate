import AuthService from "../services/auth.service";

const Auth = {};

Auth.checkToken = () => {
  if (localStorage.getItem("token")) {
    const token = JSON.parse(localStorage.getItem("token"));
    AuthService.checkToken(token)
      .then((res) => {
        if (res.data.status !== 200) {
          localStorage.clear();
          window.location.href = "/";
        }
      })
      .catch((err) => {
        localStorage.clear();
        window.location.href = "/";
      });
  }
};

Auth.getRule = (key) => {
  if (localStorage.getItem("ruleList")) {
    const rule = JSON.parse(localStorage.getItem("ruleList")).find(
      (item) => item.name === key
    );
    return !!rule;
  }
  return false;
};

export default Auth;
