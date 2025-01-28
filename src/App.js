import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/about';
import Contact from './components/Contact';
import Error from './components/Error';
import ReataurantaMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStores';
// import Grocery from './components/Grocery';
import { lazy } from 'react';
import {useState, useEffect} from "react"
import Cart from './components/Cart';

const currYear = new Date().getFullYear();



const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {


  const[userName , setUserName] = useState();


  useEffect(() => {
    const data = {
      name : "Nishant"
    };
    setUserName(data.name)
  })


  return (
    <Provider store={appStore}>
    <userContext.Provider value= {{loggedInUser : userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/About',
        element: <About/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      },
      {
        path: '/restaurant/:resId',
        element: <ReataurantaMenu/>,
      },
      {
        path: '/Cart',
        element: <Cart/>,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
