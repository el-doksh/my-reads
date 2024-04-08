import React from "react";
import { PageLayout } from "../Layout/PageLayout";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

export const CreatingRoutesApproaches = () => {
  //first way object based approach
  const firstWayy = true;
  const router = createBrowserRouter([
    { path: '/', element:<PageLayout /> },
    { path: '/router', element:<PageLayout /> }
  ])
  
  if(firstWayy) {

    return <RouterProvider router={router}> ...1st.. </RouterProvider>
  }

  //second way jsx based approach
  const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<PageLayout />} />
        <Route path="/router" element={<PageLayout />} errorElement={<>Error page</>}  />
    </Route>
  )
  const router2 = createBrowserRouter(routeDefinitions);

  return <RouterProvider router={router2}> ..2nd... </RouterProvider>
}