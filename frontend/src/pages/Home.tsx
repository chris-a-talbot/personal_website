import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
                                Computational Biologist & Environmental Scientist
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
                            <Card className="ml-20 max-w-xl animate-in fade-in slide-in-from-left-4 duration-700 bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                                    <p className="relative text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-relaxed tracking-wide">
                                        Leveraging computational innovation to understand and protect our changing planet
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center justify-end">
                            <Card className="mr-20 max-w-xl animate-in fade-in slide-in-from-right-4 duration-700 bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                                    <p className="relative text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-relaxed tracking-wide">
                                        Building the next generation of tools for conservation science and environmental research
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="h-screen">
                        <div className="max-w-6xl mx-auto h-full flex items-center">
                            <Card className="ml-20 max-w-xl animate-in fade-in slide-in-from-left-4 duration-700 bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                                    <h2 className="relative text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 tracking-tight mb-8">
                                        About Me
                                    </h2>
                                    <div className="relative space-y-6 text-xl text-blue-100 leading-relaxed">
                                        <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                                            I'm a computational biologist and environmental scientist working at the intersection of genomics, ecology, and global change.
                                        </p>
                                        <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                                            My research combines cutting-edge computational methods with evolutionary biology to understand how species and ecosystems respond to environmental change.
                                        </p>
                                        <p className="animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                                            Through innovative technology and community engagement, I'm committed to developing sustainable solutions for our planet's most pressing environmental challenges.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
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