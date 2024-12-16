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

    return (
        <>
            <Navigation />

            <div className="relative min-h-[400vh]">
                <div className="fixed top-0 left-0 w-full h-screen">
                    <ParticleSystem progress={scrollProgress} />
                </div>

                <div className="relative z-10">
                    <section className="h-screen flex flex-col items-center justify-center">
                        <h1 className="text-7xl font-bold text-white text-center px-4 mb-12 tracking-tight [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                            Chris Talbot
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/cv">
                                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">
                                    View CV
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">
                                    Portfolio
                                </Button>
                            </Link>
                            <a href="https://your-substack-url.substack.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm">
                                    Read Blog
                                </Button>
                            </a>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <p className="text-3xl text-white/90 leading-relaxed tracking-wide ml-20 max-w-xl [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                                Decoding nature's blueprints to address our planet's most pressing challenges
                            </p>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center justify-end">
                            <p className="text-3xl text-white/90 leading-relaxed tracking-wide mr-20 max-w-xl [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                                Bridging the gap between DNA and ecosystems to pioneer solutions for global environmental change
                            </p>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <div className="ml-20 max-w-xl space-y-8">
                                <h2 className="text-4xl font-semibold text-white tracking-tight [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                                    About Me
                                </h2>
                                <div className="space-y-6 text-xl text-white/80 leading-relaxed [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                                    <p>
                                        I'm a researcher and technologist working at the intersection of molecular biology and environmental science.
                                    </p>
                                    <p>
                                        My work combines advanced genomics with ecosystem modeling to understand and address global environmental challenges.
                                    </p>
                                    <p>
                                        Through computational innovation, I aim to transform our understanding of natural systems and develop sustainable solutions for our changing world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="relative z-10">
                    <Timeline />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Home;