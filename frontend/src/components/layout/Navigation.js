import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`, children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx(Link, { to: "/", className: "text-xl font-bold text-primary hover:text-primary/80", children: "CT" }), _jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [_jsx(Link, { to: "/cv", children: _jsx(Button, { variant: "ghost", children: "CV" }) }), _jsx(Link, { to: "/portfolio", children: _jsx(Button, { variant: "ghost", children: "Portfolio" }) }), _jsx("a", { href: "https://your-substack-url.substack.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { variant: "ghost", children: "Blog" }) }), _jsx("a", { href: "https://github.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "ghost", children: _jsx(Github, { className: "h-5 w-5" }) }) }), _jsx("a", { href: "https://twitter.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "ghost", children: _jsx(Twitter, { className: "h-5 w-5" }) }) })] }), _jsx("button", { className: "md:hidden p-2", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? (_jsx(X, { className: "h-6 w-6" })) : (_jsx(Menu, { className: "h-6 w-6" })) })] }) }) }), isMenuOpen && (_jsx("div", { className: "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-16", children: _jsxs("div", { className: "flex flex-col items-center space-y-4 p-4", children: [_jsx(Link, { to: "/cv", onClick: () => setIsMenuOpen(false), children: _jsx(Button, { variant: "ghost", className: "w-full", children: "CV" }) }), _jsx(Link, { to: "/portfolio", onClick: () => setIsMenuOpen(false), children: _jsx(Button, { variant: "ghost", className: "w-full", children: "Portfolio" }) }), _jsx("a", { href: "https://your-substack-url.substack.com", target: "_blank", rel: "noopener noreferrer", onClick: () => setIsMenuOpen(false), children: _jsx(Button, { variant: "ghost", className: "w-full", children: "Blog" }) }), _jsxs("div", { className: "flex space-x-4 pt-4", children: [_jsx("a", { href: "https://github.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "ghost", children: _jsx(Github, { className: "h-5 w-5" }) }) }), _jsx("a", { href: "https://twitter.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "ghost", children: _jsx(Twitter, { className: "h-5 w-5" }) }) })] })] }) }))] }));
};
export default Navigation;
