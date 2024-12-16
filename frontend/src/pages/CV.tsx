import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CV = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <nav className="mb-8">
                <Link to="/" className="text-primary hover:text-primary/80">
                    ← Back to Home
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Curriculum Vitae</h1>
                <p className="text-xl text-muted-foreground mb-8">Computational Biologist & Environmental Scientist</p>

                <div className="space-y-12">
                    {/* Education */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Education</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">B.S. Ecology, Evolution, and Biodiversity</h3>
                                        <p className="text-muted-foreground">University of Michigan (UMich) | GPA 3.74 | 2024</p>
                                        <ul className="list-disc list-inside mt-2 text-muted-foreground">
                                            <li>Graduated with Highest Honors under Marjorie Weber</li>
                                            <li>Honors Thesis: Patterns of floral color in communities of common Northeast American wildflowers</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Associates of General Studies</h3>
                                        <p className="text-muted-foreground">Grand Rapids Community College | GPA 3.9 | 2020</p>
                                        <p className="text-muted-foreground">Computer Science & Mathematics Concentration</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Research */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Research Experience</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Lab Technician - Bradburd Lab</h3>
                                        <p className="text-muted-foreground">UMich-Ecology & Evolutionary Biology | 2024-Present</p>
                                        <p className="text-muted-foreground">Testing, documenting, and visualizing geographic evolutionary inference methods</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Lab Technician - Weber Lab</h3>
                                        <p className="text-muted-foreground">UMich-EEB | 2022-Present</p>
                                        <p className="text-muted-foreground">Investigating patterns of floral color across Northeast American wildflowers</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Undergraduate Researcher - Márquez Lab</h3>
                                        <p className="text-muted-foreground">UMich-EEB | 2021-2022</p>
                                        <p className="text-muted-foreground">Optimizing CRISPR-Cas9 genetic modification in Phyllobates poison-dart frogs</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Publications & Presentations */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Publications & Presentations</h2>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">Talbot, CA, Weber, MG. In Preparation. Investigating patterns of floral color across Northeast American wildflowers using citizen science data.</p>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium mb-2">Recent Presentations</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>Talk & Poster - Evolution 2024, Montreal, QC</li>
                                            <li>Lightning Talk & Poster - Botany 2024, Grand Rapids, MI</li>
                                            <li>Talk - UMich Department of Ecology & Evolutionary Biology</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Skills & Technologies */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Technical Skills</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>R (Advanced - C1)</li>
                                            <li>Python (Intermediate - B1)</li>
                                            <li>C++ (Intermediate - B2)</li>
                                            <li>TypeScript/JavaScript</li>
                                            <li>Rust</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>CRISPR-Cas9</li>
                                            <li>Geographic Information Systems</li>
                                            <li>Population Genomics</li>
                                            <li>Data Visualization</li>
                                            <li>Statistical Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Outreach & Leadership */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Outreach & Leadership</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Environmental Education</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>Docent at Matthaei Botanical Gardens & Nichols Arboretum (2023-Present)</li>
                                            <li>Forestry Test Writer & Proctor - UMich Science Olympiad (2023-Present)</li>
                                            <li>Founding Member - UMich Ecological Restoration Club (2023-Present)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Community Leadership</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>Co-Founder & President - Students for Public Power @UM (2023-Present)</li>
                                            <li>Transfer Student Peer Mentor - UMich-LSA Transfer Bridges Program (2022-2023)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CV;