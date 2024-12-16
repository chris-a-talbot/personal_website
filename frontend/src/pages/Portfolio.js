import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (_jsxs("div", { className: "min-h-screen bg-background p-8", children: [_jsx("nav", { className: "mb-8", children: _jsx(Link, { to: "/", className: "text-primary hover:text-primary/80", children: "\u2190 Back to Home" }) }), _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold mb-8 text-gradient", children: "Portfolio" }), _jsx("div", { className: "grid gap-8 md:grid-cols-2", children: [1, 2, 3, 4].map((i) => (_jsxs("div", { className: "p-6 rounded-lg bg-card text-card-foreground", children: [_jsxs("h3", { className: "text-xl font-semibold mb-2", children: ["Project ", i] }), _jsx("p", { className: "text-muted-foreground", children: "Coming soon..." })] }, i))) })] })] }));
};
export default Portfolio;
