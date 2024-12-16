import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
    return (_jsx("footer", { className: "bg-background/50 backdrop-blur-lg py-12", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex flex-col items-center space-y-8", children: [_jsx("h2", { className: "text-2xl font-semibold text-gradient", children: "Get in Touch" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://github.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "outline", children: _jsx(Github, { className: "h-5 w-5" }) }) }), _jsx("a", { href: "https://twitter.com/yourusername", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { size: "icon", variant: "outline", children: _jsx(Twitter, { className: "h-5 w-5" }) }) }), _jsx("a", { href: "mailto:your.email@example.com", children: _jsx(Button, { size: "icon", variant: "outline", children: _jsx(Mail, { className: "h-5 w-5" }) }) })] }), _jsxs("div", { className: "text-sm text-muted-foreground text-center", children: [_jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Chris Talbot. All rights reserved."] }), _jsx("p", { className: "mt-1", children: "Built with React, Three.js, and Tailwind CSS" })] })] }) }) }));
};
export default Footer;