import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, Bug, Hammer, Play } from "lucide-react";
// Patterns - YouTube Video IDs
const pattern1 = "https://www.youtube.com/embed/mCX0gqyyXhM"; // 1er motif
const pattern2 = "https://www.youtube.com/embed/BTjgVa-C8ak"; // 1er Courbe
const pattern3 = "https://www.youtube.com/embed/nUNMBoyrw08"; // FeuArtifice1
const pattern4 = "https://www.youtube.com/embed/t42SMN7qEeU"; // Test Tapis

const LogsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* Nav */}
            <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/project-x" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
                    </Link>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-x">Home</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-1">Hardware</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-2">Software</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-primary font-bold bg-primary/10">
                            <Link to="/project-2/part-3">Logs</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            <div className="pt-24 max-w-4xl mx-auto px-4 space-y-24">

                {/* Header */}
                <header className="space-y-4 border-b border-border pb-8">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Logs & Data // Module 04</div>
                    <h1 className="text-4xl md:text-5xl font-bold">Project Logs</h1>
                    <p className="text-xl text-muted-foreground">
                        Archives of failures, successes and visual iterations.
                    </p>
                </header>

                {/* Making Of Gallery */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-amber-500">
                        <BookOpen className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Visual Archives (Making Of)</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Multicolor Noise Test", status: "ACCEPTED", reason: "Successful pseudo-random noise injection validation.", variant: "default", border: "border-primary/30", video: pattern1 },
                            { title: "Random Patterns", status: "ACCEPTED", reason: "Fast and visually 'Glitch Art'.", variant: "default", border: "border-primary/30", video: pattern2 },
                            { title: "Fireworks", status: "REJECTED", reason: "Too many particles for RAM.", variant: "destructive", border: "border-destructive/30", video: pattern3 },
                            { title: "Carpet Effect (XOR)", status: "ACCEPTED", reason: "VGA Classic, very fast.", variant: "default", border: "border-primary/30", video: pattern4 }
                        ].map((item, i) => (
                            <div key={i} className={`bg-card border ${item.border} p-6 rounded-xl space-y-3 shadow-sm`}>
                                <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground font-mono text-xs border border-border rounded-lg overflow-hidden relative group">
                                    <iframe
                                        src={item.video}
                                        className="w-full h-full object-cover"
                                        title={item.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <span className={`text-xs font-bold border px-2 py-0.5 rounded-full ${item.status === 'ACCEPTED' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-destructive border-destructive/20'}`}>
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {item.reason}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="space-y-8 pb-12">
                    <div className="flex items-center gap-3 text-destructive">
                        <Hammer className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Troubleshooting</h2>
                    </div>

                    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                <tr>
                                    <th className="px-6 py-4">Symptom / Problem</th>
                                    <th className="px-6 py-4">Diagnostic</th>
                                    <th className="px-6 py-4">Applied Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4 font-bold"><Bug className="w-4 h-4 inline mr-2 text-destructive" />No Video Signal</td>
                                    <td className="px-6 py-4 text-muted-foreground">Dry solder joints on VGA connector (Pin 13/14).</td>
                                    <td className="px-6 py-4 text-primary">Reflow & Continuity Test.</td>
                                </tr>
                                <tr className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4 font-bold"><Bug className="w-4 h-4 inline mr-2 text-destructive" />Black Square in Center</td>
                                    <td className="px-6 py-4 text-muted-foreground">Division by zero in spiral algo.</td>
                                    <td className="px-6 py-4 text-primary">Added <code>if(abs(dx) &gt; 1)</code>.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="flex justify-center pt-12 border-t border-border">
                    <Link to="/project-x">
                        <Button variant="outline" size="lg" className="gap-2">
                            <ArrowUpRight className="w-4 h-4" /> Return to Project Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 text-center text-muted-foreground border-t border-border">
                <p className="text-sm">
                    © {new Date().getFullYear()} - Paul SIMONET, Maxime VIAL, Alexandre LE PORT
                </p>
            </footer>
        </div>
    );
};

export default LogsPage;
