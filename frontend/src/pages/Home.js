import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Timeline from '@/components/timeline/Timeline';
import ParticleSystem from '@/components/particles/ParticleSystem';
const Home = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, window.scrollY / scrollHeight));
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsxs("div", { className: "relative min-h-[400vh]", children: [_jsx("div", { className: "fixed top-0 left-0 w-full h-screen", children: _jsx(ParticleSystem, { progress: scrollProgress }) }), _jsxs("div", { className: "relative z-10", children: [_jsxs("section", { className: "h-screen flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-7xl font-bold text-white text-center px-4 mb-12 tracking-tight [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]", children: "Chris Talbot" }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/cv", children: _jsx(Button, { variant: "outline", className: "text-white border-white/20 hover:bg-white/10 backdrop-blur-sm", children: "View CV" }) }), _jsx(Link, { to: "/portfolio", children: _jsx(Button, { variant: "outline", className: "text-white border-white/20 hover:bg-white/10 backdrop-blur-sm", children: "Portfolio" }) }), _jsx("a", { href: "https://your-substack-url.substack.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { variant: "outline", className: "text-white border-white/20 hover:bg-white/10 backdrop-blur-sm", children: "Read Blog" }) })] })] }), _jsx("section", { className: "h-screen", children: _jsx("div", { className: "max-w-6xl mx-auto h-full flex items-center", children: _jsx("p", { className: "text-3xl text-white/90 leading-relaxed tracking-wide ml-20 max-w-xl [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]", children: "Decoding nature's blueprints to address our planet's most pressing challenges" }) }) }), _jsx("section", { className: "h-screen", children: _jsx("div", { className: "max-w-6xl mx-auto h-full flex items-center justify-end", children: _jsx("p", { className: "text-3xl text-white/90 leading-relaxed tracking-wide mr-20 max-w-xl [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]", children: "Bridging the gap between DNA and ecosystems to pioneer solutions for global environmental change" }) }) }), _jsx("section", { className: "h-screen", children: _jsx("div", { className: "max-w-6xl mx-auto h-full flex items-center", children: _jsxs("div", { className: "ml-20 max-w-xl space-y-8", children: [_jsx("h2", { className: "text-4xl font-semibold text-white tracking-tight [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]", children: "About Me" }), _jsxs("div", { className: "space-y-6 text-xl text-white/80 leading-relaxed [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]", children: [_jsx("p", { children: "I'm a researcher and technologist working at the intersection of molecular biology and environmental science." }), _jsx("p", { children: "My work combines advanced genomics with ecosystem modeling to understand and address global environmental challenges." }), _jsx("p", { children: "Through computational innovation, I aim to transform our understanding of natural systems and develop sustainable solutions for our changing world." })] })] }) }) })] }), _jsx("section", { className: "relative z-10", children: _jsx(Timeline, {}) })] }), _jsx(Footer, {})] }));
};
export default Home;
