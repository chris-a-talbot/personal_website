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
                <p className="text-xl text-muted-foreground mb-8">Computational Technician in Ecology and Evolutionary Biology, University of Michigan</p>

                <div className="space-y-12">
                    {/* Summary */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Summary</h2>
                                <p className="text-muted-foreground">First-gen academic with years of experience in the lab, field, and behind a screen. Interested in patterns of ecological organization across spatiotemporal scales, the evolutionary drivers of those patterns, and how those patterns respond to global change. Fascinated with emerging methods for evaluating complex systems, including community science, machine learning, and tree sequences.</p>
                            </CardContent>
                        </Card>
                    </section>

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
                                            <li>Graduated with Highest Honors under the supervision of Marjorie Weber</li>
                                            <li>Honors Thesis: Patterns of floral color in communities of common Northeast American wildflowers</li>
                                            <li>Coursework: Statistics & probability, programming & data structures, genetics, macroevolution, ethnobotany</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Associates of General Studies</h3>
                                        <p className="text-muted-foreground">Grand Rapids Community College (GRCC) | GPA 3.9 | 2020</p>
                                        <ul className="list-disc list-inside mt-2 text-muted-foreground">
                                            <li>Computer Science & Mathematics Concentration</li>
                                            <li>Coursework: C++ programming, database development, web application programming, information security</li>
                                        </ul>
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
                                        <p className="text-muted-foreground">Project: "Patterns of floral color in communities of common Northeast American wildflowers"</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Undergraduate Researcher - Márquez Lab</h3>
                                        <p className="text-muted-foreground">UMich-EEB | 2021-2022</p>
                                        <p className="text-muted-foreground">Project: "Optimizing CRISPR-Cas9 genetic modification in Phyllobates poison-dart frogs"</p>
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
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Publications</h3>
                                        <p className="text-muted-foreground">Talbot, CA, Weber, MG. In Preparation. Investigating patterns of floral color across Northeast American wildflowers using citizen science data.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Presentations</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>Talk & Poster - Evolution 2024, Montreal, QC</li>
                                            <li>Lightning Talk & Poster - Botany 2024, Grand Rapids, MI</li>
                                            <li>Talk - UMich Department of Ecology & Evolutionary Biology</li>
                                            <li>Poster - UMich Undergraduate Research Opportunity Program (UROP) Symposium</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Fellowships & Grants */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Fellowships & Grants</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Biological Station Student Fellow - UMich Biological Station ($1,680) | 2023</li>
                                    <li>Student Research Grant Recipient - UMich UROP ($5,000) | 2022-2023</li>
                                    <li>Travel Grant Recipient - SACNAS ($2,500) | 2022</li>
                                    <li>Biomedical & Life Sciences Summer Fellow - UMich UROP ($4,000) | 2022</li>
                                    <li>Community College Summer Institute Fellow - UMich-School of Information ($100) | 2019</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Scholarships */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Scholarships</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Michigan Competitive Scholarship Recipient - UMich ($3,000) | 2022, 2023, 2024</li>
                                    <li>John J. and Emily S. Guettler Scholarship - UMich ($4,450) | 2023</li>
                                    <li>Harry Helfman Literary Student Aid Fund Scholarship Recipient - UMich ($4,100) | 2022</li>
                                    <li>Mitchell and Shirley Raskin LSA Scholarship Recipient - UMich ($2,000) | 2021</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Teaching & Mentoring */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Teaching & Mentoring</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Docent (Volunteer Educator) - Matthaei Botanical Gardens & Nichols Arboretum | 2023-Present</li>
                                    <li>Forestry Test Writer & Proctor (Volunteer) - UMich Science Olympiad | 2023-Present</li>
                                    <li>Transfer Student Peer Mentor - UMich-LSA Transfer Bridges Program | 2022-2023</li>
                                    <li>Professional Peer Tutor - GRCC Drop-in Tutoring Labs - Mathematics, Language Arts | 2019-2020</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Professional & Service */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Professional & Service</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Percussionist - Straits of Mackinac Concert Band, Mackinaw City, MI | 2024-Present</li>
                                    <li>Co-Founder, President, and Volunteer - Students for Public Power @UM | 2023-Present</li>
                                    <li>Shift Leader - Biggby Coffee, Grand Rapids, MI | 2021-2023</li>
                                    <li>Seasonal Retail Lead - John Ball Zoo, Grand Rapids, MI | 2019</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Technical Skills</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>R</li>
                                            <li>German</li>
                                            <li>C++</li>
                                            <li>Python</li>
                                            <li>Nishnaabemwin (Eastern Ojibwe)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Certifications</h3>
                                        <ul className="list-disc list-inside text-muted-foreground">
                                            <li>Certified Michigan Naturalist - Michigan State University Extension | 2024</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Professional Memberships */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Professional Memberships</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>American Society of Naturalists - Student Member | 2024-Present</li>
                                    <li>Botanical Society of America - Student Member | 2024-Present</li>
                                    <li>Society for the Study of Evolution - Student Member | 2022-Present</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Extracurriculars */}
                    <section>
                        <Card className="bg-black/70 backdrop-blur-sm border-blue-500/20 hover:border-purple-500/30 transition-colors">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Extracurriculars</h2>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    <li>Founding Member - UMich Ecological Restoration Club | 2023-Present</li>
                                    <li>Vice President - GRCC Programmers | 2019-2020</li>
                                    <li>Ensemble & Section Leader, Performer - Genesis Percussion Ensemble | 2014-2020</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CV;