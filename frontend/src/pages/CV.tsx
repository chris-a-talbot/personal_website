import { Link } from 'react-router-dom';

const CV = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <nav className="mb-8">
                <Link to="/" className="text-primary hover:text-primary/80">
                    ← Back to Home
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gradient">Curriculum Vitae</h1>
                <div className="space-y-8">
                    {/* Placeholder sections */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CV;