import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import CV from '@/pages/CV';
import Portfolio from '@/pages/Portfolio';
import {useEffect} from "react";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/cv',
        element: <CV />,
    },
    {
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        path: '/blog',
        // Redirect to Substack
        element: <RedirectToSubstack />,
    },
]);

function RedirectToSubstack() {
    useEffect(() => {
        window.location.href = 'https://your-substack-url.substack.com';
    }, []);

    return <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Redirecting to blog...</p>
    </div>;
}