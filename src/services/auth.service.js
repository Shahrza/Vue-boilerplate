import AppService from './_app.service'

export default {
   login: (params) => {
      return AppService.post('', params);
   },

   checkToken: (params) => {
      return AppService.get(``);
   },
}
