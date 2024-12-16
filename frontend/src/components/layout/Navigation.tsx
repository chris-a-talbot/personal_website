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

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Home Link */}
                        <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80">
                            CT
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/cv">
                                <Button variant="ghost">CV</Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="ghost">Portfolio</Button>
                            </Link>
                            <a href="https://your-substack-url.substack.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost">Blog</Button>
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="ghost">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="ghost">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-16">
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <Link to="/cv" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="ghost" className="w-full">CV</Button>
                        </Link>
                        <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="ghost" className="w-full">Portfolio</Button>
                        </Link>
                        <a
                            href="https://your-substack-url.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button variant="ghost" className="w-full">Blog</Button>
                        </a>
                        <div className="flex space-x-4 pt-4">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="ghost">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="ghost">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;