import Layout from './../Layout'
import Home from './../Home'
import Aboutus from '../Aboutus';
import Products from '../Products';
import Partners from '../Partners';
import Contact from '../Contact'
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/Aboutus",
            element: <Aboutus />,
          },
          {
            path: "/Products",
            element: <Products />,
          },
          {
            path: "/Partners",
            element: <Partners />,
          },
          {
            path: "/Contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
];

export default routes;
