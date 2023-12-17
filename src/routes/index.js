import Home from '../pages/Home';
import School from '../pages/School';
import Cart from '../pages/Cart';
import Pay from '../pages/Pay';
//public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/school', component: School },
  { path: '/cart', component: Cart },
  { path: '/pay', component: Pay },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
