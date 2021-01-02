// import Methods from '../methods/helper'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index'),
        meta: {
            isLogin: true
        }
    },

]
