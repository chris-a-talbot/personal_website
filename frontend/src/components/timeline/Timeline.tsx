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
        year: 2020,
        title: "Associates Degree Achievement",
        description: "Graduated from Grand Rapids Community College with an Associates of General Studies, focusing on Computer Science & Mathematics with a 3.9 GPA.",
        tags: ["Education", "Computer Science", "Mathematics"]
    },
    {
        year: 2021,
        title: "Started Research Career",
        description: "Joined the Márquez Lab at UMich, beginning work on optimizing CRISPR-Cas9 genetic modification in Phyllobates poison-dart frogs.",
        tags: ["Molecular Biology", "Genetics", "Lab Research"]
    },
    {
        year: 2022,
        title: "Advanced to Weber Lab",
        description: "Began research on patterns of floral color in Northeast American wildflower communities, combining computational methods with citizen science data.",
        tags: ["Evolutionary Biology", "Data Analysis", "Citizen Science"]
    },
    {
        year: 2023,
        title: "Environmental Leadership",
        description: "Co-founded Students for Public Power @UM and started as a docent at Matthaei Botanical Gardens, expanding impact through education and advocacy.",
        tags: ["Leadership", "Education", "Environmental Advocacy"]
    },
    {
        year: 2024,
        title: "Graduation & Professional Advancement",
        description: "Graduated with Highest Honors in Ecology, Evolution, and Biodiversity from UMich. Began position at Bradburd Lab working on geographic evolutionary inference methods.",
        tags: ["Academic Achievement", "Career Advancement", "Computational Biology"]
    },
    {
        year: 2024,
        title: "Research Publications & Presentations",
        description: "Presented research at Evolution 2024 and Botany 2024 conferences, while preparing publication on floral color patterns using citizen science data.",
        tags: ["Research", "Publications", "Academic Presentations"]
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
                Research & Impact Timeline
            </h2>

            <div className="relative max-w-4xl mx-auto px-4" ref={timelineRef}>
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                <div className="space-y-16">
                    {events.map((event, index) => (
                        <div
                            key={event.year}
                            className={`relative flex flex-col md:flex-row gap-8 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />

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