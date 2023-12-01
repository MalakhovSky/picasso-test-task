import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import {RouterProvider} from "react-router";
import {router} from "./app/router/router";

import {setupStore} from "./app/store";
import {Provider} from "react-redux";
import {Posts} from "./Pages/Posts/Posts";


const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(

      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
);

