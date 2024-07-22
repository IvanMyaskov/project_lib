import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './projects/projects';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CounterProject from './projects/counter_project/counter_project';
import ComProject from './projects/com_project/com_project';
const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/projects",
  element: <Projects />,
},
{
  path: "/projects/counter",
  element: <CounterProject />
},
{
  path: "/projects/comments",
  element: <ComProject />
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
