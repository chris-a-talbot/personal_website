import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
        <footer className="bg-background/50 backdrop-blur-lg py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8">
                    <h2 className="text-2xl font-semibold text-gradient">Get in Touch</h2>

                    <div className="flex space-x-4">
                        <a href="https://github.com/chris-a-talbot" target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="outline">
                                <Github className="h-5 w-5" />
                            </Button>
                        </a>
                        <a href="https://twitter.com/chris__talbot" target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="outline">
                                <Twitter className="h-5 w-5" />
                            </Button>
                        </a>
                        <a href="mailto:your.email@example.com">
                            <Button size="icon" variant="outline">
                                <Mail className="h-5 w-5" />
                            </Button>
                        </a>
                    </div>

                    <div className="text-sm text-muted-foreground text-center">
                        <p>&copy; {new Date().getFullYear()} Chris Talbot. All rights reserved.</p>
                        <p className="mt-1">Built with React, Three.js, and Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;