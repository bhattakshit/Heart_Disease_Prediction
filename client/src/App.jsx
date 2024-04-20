import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from  "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Root from "./pages/Root";
import Form from "./pages/Form"
import Private from "./pages/Private";
import Results from "./pages/Results";


const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />
    ,children:[
      {
        element: <Private />,
        children: [
          {
            path: "/form",
            element: <Form />,
          },
          {
            path:'/results',
            element:<Results/>
          }
        ],
      },
      {
        index:true,
        element:<Home/>
      },
      {
        path : "sign-up",
        element : <SignUpPage />
      },
      {
        path : "sign-in",
        element : <SignInPage />
      },
    
    ]
  }

 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
