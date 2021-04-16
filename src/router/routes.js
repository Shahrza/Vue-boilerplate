// import Methods from '../utils/index'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index'),
        meta: {
            isAuth: true
        }
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        component: () => import('../views/500/index'),
    },
    {
        path: "*",
        component: () => import('../views/404/index')
    },
    {
        path: "/error",
        name: 'error',
        component: () => import('../views/500/index')
    }
]
