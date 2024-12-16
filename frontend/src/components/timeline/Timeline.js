import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
const events = [
    {
        year: 2024,
        title: "Lab Technician at Bradburd Lab",
        description: "Developing and implementing cutting-edge population genomic techniques to study geographic patterns in human ancestry.",
        tags: ["Genomics", "Population Genetics", "Computational Biology"]
    },
    {
        year: 2024,
        title: "Research on Floral Color Patterns",
        description: "Led research combining citizen science data with computational methods to understand patterns of floral color in Northeast American wildflowers.",
        tags: ["Evolutionary Biology", "Citizen Science", "Data Analysis"]
    },
    {
        year: 2023,
        title: "Environmental Education & Outreach",
        description: "Began role as docent at Matthaei Botanical Gardens, combining scientific expertise with public education to promote environmental awareness.",
        tags: ["Education", "Conservation", "Community Engagement"]
    },
    {
        year: 2022,
        title: "CRISPR-Cas9 Research",
        description: "Contributed to genetic modification research in poison dart frogs, expanding toolkit for studying evolutionary processes.",
        tags: ["Molecular Biology", "Genetics", "Lab Research"]
    },
    {
        year: 2021,
        title: "Started Environmental Advocacy",
        description: "Co-founded Students for Public Power @UM, advocating for sustainable energy solutions and environmental policy change.",
        tags: ["Advocacy", "Sustainability", "Leadership"]
    }
];
const Timeline = () => {
    const timelineRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    return (_jsxs("div", { ref: ref, className: "py-20", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-16 text-gradient", children: "Research & Impact Timeline" }), _jsxs("div", { className: "relative max-w-4xl mx-auto px-4", ref: timelineRef, children: [_jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" }), _jsx("div", { className: "space-y-16", children: events.map((event, index) => (_jsxs("div", { className: `relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`, children: [_jsx("div", { className: "absolute left-3 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" }), _jsx(Card, { className: `w-full md:w-[calc(50%-2rem)] ${inView ? 'animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both' : ''}`, style: { animationDelay: `${index * 200}ms` }, children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-semibold text-gradient", children: event.title }), _jsx("span", { className: "text-sm text-muted-foreground", children: event.year })] }), _jsx("p", { className: "text-muted-foreground mb-4", children: event.description }), event.tags && (_jsx("div", { className: "flex flex-wrap gap-2", children: event.tags.map(tag => (_jsx("span", { className: "px-2 py-1 text-xs rounded-full bg-primary/10 text-primary", children: tag }, tag))) }))] }) })] }, event.year))) })] })] }));
};
export default Timeline;
