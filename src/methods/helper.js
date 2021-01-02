import Auth from '../services/auth.service'

const User = {}

User.userCheckByToken = () => {
   if (localStorage.token) {
      const token = JSON.parse(localStorage.token)
      Auth.checkToken(token)
         .then(res => {
            if (res.data.status !== 200) {
               localStorage.clear();
               window.location.href = '/';
            }
         })
         .catch(err => {
            localStorage.clear();
            window.location.href = '/';
         })
   }
};

User.getRule = (key) => {
   if (localStorage.ruleList) {
      const rule = JSON.parse(localStorage.ruleList).find(item => item.name === key);
      return !!rule;
   }
   return false;
};


export default User;