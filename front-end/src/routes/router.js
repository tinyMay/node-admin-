import Vue from "vue";
import Router from "vue-router";
// import Admin from "../components/admin.vue";
// import Login from "../components/common/login.vue";

// import UserForm from "../components/user/user-form.vue";
// import UserList from "../components/user/user-list.vue";

// import MemberForm from "../components/member/member-form.vue";
// import MemberList from "../components/member/member-list.vue";

// import GoodstypeForm from "../components/goodstype/goodstype-form.vue";
// import GoodstypeList from "../components/goodstype/goodstype-list.vue";


// import GoodsForm from "../components/goods/goods-form.vue";
// import GoodsList from "../components/goods/goods-list.vue";


// import orderForm from "../components/order/order-form.vue";
// import orderList from "../components/order/order-list.vue";


// const Admin = () => import(/* webpackChunkName: "Admin" */ '../components/admin.vue')
// const Login = () => import(/* webpackChunkName: "Login" */ '../components/common/login.vue')
// const UserForm = () => import(/* webpackChunkName: "UserForm" */ '../components/user/user-form.vue')
// const UserList = () => import(/* webpackChunkName: "UserList" */ '../components/user/user-list.vue')

// const Admin = r => require.ensure([], () => r(require('../components/admin.vue')), 'chunkname1')
// const Login = r => require.ensure([], () => r(require('../components/common/login.vue')), 'chunkname2')
// const UserForm = r => require.ensure([], () => r(require('../components/user/user-form.vue')), 'chunkname3')
// const UserList = r => require.ensure([], () => r(require('../components/user/user-list.vue')), 'chunkname4')

const Admin = () => import('../components/admin.vue')
const Login = () => import('../components/common/login.vue')
const UserForm = () => import('../components/user/user-form.vue')
const UserList = () => import('../components/user/user-list.vue')
const MemberForm = () => import('../components/member/member-form.vue')
const MemberList = () => import('../components/member/member-list.vue')
const GoodstypeForm = () => import('../components/goodstype/goodstype-form.vue')
const GoodstypeList = () => import('../components/goodstype/goodstype-list.vue')
const GoodsForm = () => import('../components/goods/goods-form.vue')
const GoodsList = () => import('../components/goods/goods-list.vue')
const orderForm = () => import('../components/order/order-form.vue')
const orderList = () => import('../components/order/order-list.vue')

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            redirect: '/admin/goods-list',
            component: Admin,
            children: [
				
				  {
                    path: '/admin/user-list',
                    component: UserList,
                },
                {
                    path: '/admin/user-form',
                    component: UserForm,
                },
				
				  {
                    path: '/admin/member-list',
                    component: MemberList,
                },
                {
                    path: '/admin/member-form',
                    component: MemberForm,
                },
				
				  {
                    path: '/admin/goodstype-list',
                    component: GoodstypeList,
                },
				
                {
                    path: '/admin/goodstype-form',
                    component: GoodstypeForm,
                },
                {
                    path: '/admin/goods-list',
                    component: GoodsList,
                },
                {
                    path: '/admin/goods-form',
                    component: GoodsForm,
                },
                {
                    path: '/admin/order-list',
                    component: orderList,
                },
                {
                    path: '/admin/order-form',
                    component: orderForm,
                }
               
              
				
            ]
        },
        {
            path: '/',
            component: Login,
        },
    ]
});