import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import CV from '@/pages/CV';
import Portfolio from '@/pages/Portfolio';
import { useEffect } from "react";
export const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(Home, {}),
    },
    {
        path: '/cv',
        element: _jsx(CV, {}),
    },
    {
        path: '/portfolio',
        element: _jsx(Portfolio, {}),
    },
    {
        path: '/blog',
        // Redirect to Substack
        element: _jsx(RedirectToSubstack, {}),
    },
]);
function RedirectToSubstack() {
    useEffect(() => {
        window.location.href = 'https://your-substack-url.substack.com';
    }, []);
    return _jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsx("p", { className: "text-foreground", children: "Redirecting to blog..." }) });
}
