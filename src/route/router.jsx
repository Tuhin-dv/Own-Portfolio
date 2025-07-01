import { createBrowserRouter } from "react-router";

import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Root from "../root/Root";


export const router = createBrowserRouter([
    {
    path: '/',
    element: <Root></Root>,
    children : [
        {
            index : true,
            Component : Home
        },
        {
            path: '/about',
            Component: About 
        },
        {
            path: '/projects',
            Component: Projects 
        },
        {
            path: '/resume',
            Component: Resume 
        },
        {
            path: '/contact',
            Component: Contact 
        },
    ]
    }
])