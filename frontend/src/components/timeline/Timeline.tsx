import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
    tags?: string[];
}

const events: TimelineEvent[] = [
    {
        year: 2018,
        title: "Started Research in Evolutionary Biology",
        description: "Began exploring computational approaches to understanding evolutionary processes.",
        tags: ["Research", "Computational Biology"]
    },
    {
        year: 2020,
        title: "Published First Paper on Digital Evolution",
        description: "Investigated emergence of complex behaviors in artificial life systems.",
        tags: ["Publication", "Digital Evolution"]
    },
    {
        year: 2022,
        title: "Launched Open Source Biology Tools",
        description: "Created and released tools for visualizing evolutionary data.",
        tags: ["Open Source", "Data Visualization"]
    },
    {
        year: 2024,
        title: "Current Research",
        description: "Exploring the intersection of artificial life and machine learning.",
        tags: ["AI", "Research"]
    }
];

const Timeline = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <div ref={ref} className="py-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
                Research Timeline
            </h2>

            <div className="relative max-w-4xl mx-auto px-4" ref={timelineRef}>
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                {/* Timeline events */}
                <div className="space-y-16">
                    {events.map((event, index) => (
                        <div
                            key={event.year}
                            className={`relative flex flex-col md:flex-row gap-8 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Year marker */}
                            <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />

                            {/* Content card */}
                            <Card
                                className={`w-full md:w-[calc(50%-2rem)] ${
                                    inView ? 'animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both' : ''
                                }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gradient">{event.title}</h3>
                                        <span className="text-sm text-muted-foreground">{event.year}</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{event.description}</p>
                                    {event.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {event.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;