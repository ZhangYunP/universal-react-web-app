import Root from '../containers/root';
import Home from '../containers/home';
import First from '../containers/firstPage';
import Second from '../containers/secondPage';
import Thrid from '../containers/thridPage';
import NotFound from '../containers/notFound';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        exact: true,
        component: Home
      },
      {
        path: '/one',
        exact: true,
        component: First
      },
      {
        path: '/two',
        exact: true,
        component: Second
      },
      {
        path: '/three',
        exact: true,
        component: Thrid
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
export default routes;
