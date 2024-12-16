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
                        <div className="space-y-4 text-center mb-12">
                            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 tracking-tight">
                                Chris Talbot
                            </h1>
                            <p className="text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
                                Bioinformatician
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            <Link to="/cv">
                                <Button variant="outline" className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/20 hover:border-purple-500/30 hover:bg-purple-500/20 backdrop-blur-sm transition-all duration-300">
                                    View CV
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="outline" className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/20 hover:border-purple-500/30 hover:bg-purple-500/20 backdrop-blur-sm transition-all duration-300">
                                    Portfolio
                                </Button>
                            </Link>
                            <a href="https://your-substack-url.substack.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/20 hover:border-purple-500/30 hover:bg-purple-500/20 backdrop-blur-sm transition-all duration-300">
                                    Read Blog
                                </Button>
                            </a>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-relaxed tracking-wide ml-20 max-w-xl animate-in fade-in slide-in-from-left-4 duration-700">
                                Decoding nature's blueprints to address our planet's most pressing challenges
                            </p>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center justify-end">
                            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-relaxed tracking-wide mr-20 max-w-xl animate-in fade-in slide-in-from-right-4 duration-700">
                                Bridging the gap between DNA and ecosystems to pioneer solutions for global environmental change
                            </p>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <div className="ml-20 max-w-xl space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
                                <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 tracking-tight">
                                    About Me
                                </h2>
                                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                    <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                                        I'm a researcher and technologist working at the intersection of molecular biology and environmental science.
                                    </p>
                                    <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                                        My work combines advanced genomics with ecosystem modeling to understand and address global environmental challenges.
                                    </p>
                                    <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
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