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
    redirect: '/principal/produtos'
  },
  {
    path: '/principal',
    component: DashboardLayout,
    redirect: '/principal/produtos',
    children: [
      {
        path: 'produtos',
        name: 'Produtos',
        component: Products
      },
      {
        path: 'detalhes-produto',
        name: 'Detalhes Produto',
        component: ProductDetails
      },
      {
        path: 'carrinho',
        name: 'Carrinho',
        component: Cart
      },
      {
        path: 'categoria-eletronicos',
        name: 'Eletrônicos',
        component: ElectronicsCategories
      },
      {
        path: 'categoria-masculino',
        name: 'Masculino',
        component: ManCategories
      },
      {
        path: 'categoria-joias',
        name: 'JOIAS',
        component: JeweleryCategories
      },
      {
        path: 'categoria-feminino',
        name: 'Feminino',
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
