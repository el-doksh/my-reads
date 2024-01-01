import React from "react";
import List from "./Books/List";
import Search from "./Books/Search";
import { Route, Routes } from "react-router-dom";
import { ComponentContext1 } from "./Context";
import { ComponentCallback } from "./Callback";
import { Visibility } from "./Visibility/Visibility";
import { CanvasDraw } from "./Canvas/CanvasDraw";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <List /> }/>
            <Route path="/search" element={ <Search />}/>
            <Route path="/context" element={ <ComponentContext1 />}/>
            <Route path="/callback" element={ <ComponentCallback />}/>
            <Route path="/react-visibility" element={ <Visibility />}/>
            <Route path="/canvas" element={ <CanvasDraw />}/>
        </Routes>
    )
}