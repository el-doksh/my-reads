import React from "react";
import { Code, Steps } from "../components";
import classes from './ReacterRouter.module.scss'
import { PageLayout } from "../Layout/PageLayout";

export const ReactRouter = () => {
  
  const stepsItems = [
    "npm install react-router-dom",
    "wrap createBrowserRouter into your app component",
  ]
  return (
    <PageLayout>
      <Steps header="React router installation setup steps" items={stepsItems} />
      <h3>Using createBrowserRouter, RouterProvider</h3>
      <p>
      creating routes component: CreatingRoutesApproaches 
      </p>
      <p>
      navigation component: NavigationApproaches 
</p>

      Outlet from react-router
      <p>

      layout children
      </p>
      Error Page
    </PageLayout>
  );
}