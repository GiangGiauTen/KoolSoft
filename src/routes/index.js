import Home from '../pages/Home';
import School from '../pages/School';
import Cart from '../pages/Cart';
//public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/school', component: School },
  { path: '/cart', component: Cart },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
