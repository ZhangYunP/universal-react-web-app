import Root from '../containers/layout';
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
        component: Home
      },
      {
        path: '/one',
        component: First
      },
      {
        path: '/two',
        component: Second
      },
      {
        path: '/three',
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
