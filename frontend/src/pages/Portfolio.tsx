import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <nav className="mb-8">
                <Link to="/" className="text-primary hover:text-primary/80">
                    ← Back to Home
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gradient">Portfolio</h1>
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Placeholder project cards */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-6 rounded-lg bg-card text-card-foreground">
                            <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                            <p className="text-muted-foreground">Coming soon...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
