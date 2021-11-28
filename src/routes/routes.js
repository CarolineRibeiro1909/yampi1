import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
//import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Products from 'src/pages/Products.vue';
import ProductDetails from 'src/pages/ProductDetails.vue';
import Cart from 'src/pages/Cart.vue';
import JeweleryCategories from 'src/pages/JeweleryCategories.vue';
import ElectronicsCategories from 'src/pages/ElectronicsCategories.vue';
import WomanCategories from 'src/pages/WomanCategories.vue';
import ManCategories from 'src/pages/ManCategories.vue';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/main/products'
  },
  {
    path: '/main',
    component: DashboardLayout,
    redirect: '/main/products',
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'product-details',
        name: 'Product Details',
        component: ProductDetails
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'electronics-categories',
        name: 'Eletrônicos',
        component: ElectronicsCategories
      },
      {
        path: 'man-categories',
        name: 'Homens',
        component: ManCategories
      },
      {
        path: 'jewelery-categories',
        name: 'JOIAS',
        component: JeweleryCategories
      },
      {
        path: 'woman-categories',
        name: 'Mulheres',
        component: WomanCategories
      },
    ]
  },
  //{ path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
