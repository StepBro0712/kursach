import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/Home.vue'
import About from '@/views/About'
import Cabinet from '@/views/Cabinet'
import store from '@/store'
import kursAdmin from '@/components/adminPanel/Admin'
import AdminMainForm from '@/components/adminPanel/AdminMainForm'
import AdminCategories from '@/components/adminPanel/AdminCategories'
import AdminLayout from '@/views/AdminLayout'
import AdminCategoryItem from '@/components/adminPanel/AdminCategoryItem'
import Basket from '@/views/Basket'
import Price from '@/views/Price'
import Error from '@/views/Error'
import CreatPc from "@/views/CreatPc.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
  },

  {
    path: '/basket',
    name: 'basket',
    component: Basket,
  },
  {
    path: '/price',
    name: 'price',
    component: Price,
  },
  {
    path: '/creatPc',
    name: 'creatPc',
    component: CreatPc,
  },

  {
    path: '/cabinet',
    name: 'cabinet',
    component: Cabinet,
  },

  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: {
      requiresAdmin: true,
    },
    children: [
      {
        path: '',
        name: 'categories',
        component: kursAdmin,
        meta: {
          requiresAdmin: true,
        },
      },
      {
        path: ':category',
        name: 'category',
        component: AdminMainForm,
        meta: {
          requiresAdmin: true,
        },
        children: [
          {
            path: '',
            name: 'categoryList',
            component: AdminCategories,
            meta: {
              requiresAdmin: true,
            },
          },
          {
            path: ':id',
            name: 'categoryItem',
            component: AdminCategoryItem,
            meta: {
              requiresAdmin: true,
            },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({name: 'error'})
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.isLoggedIn && to.name === 'cabinet') {
    next('/')
    store.commit('setSingleDialogVisible', 'dialogProtectLoginVisible')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (store.state.auth.isAdmin === 2) {
      next('/')
      store.commit('setSingleDialogVisible', 'dialogProtectLoginAdminVisible')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
