// import Methods from '../utils/index'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
            isAuth: true
        }
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        component: () => import('../views/auth'),
    },
    {
        path: "*",
        component: () => import('../views/404')
    },
    {
        path: "/error",
        name: 'error',
        component: () => import('../views/500')
    }
]
