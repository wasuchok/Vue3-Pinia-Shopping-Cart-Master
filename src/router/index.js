import { createRouter, createWebHistory } from 'vue-router'

//หน้าแรก
import home_products from '../views/home_products.vue'
//หน้ารายละเอียดสินค้า
import product_detail from '../views/product_detail.vue'
//หน้าตะกร้าสินค้า
import cart_cart from '../views/cart_cart.vue'
const routes = [
  {
    path: '/',
    name: 'home_products',
    component: home_products
  },
  {
    path: '/product_detail/:id',
    name: 'product_detail',
    component: product_detail
  },
  {
    path: '/cart',
    name: 'cart_cart',
    component: cart_cart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router