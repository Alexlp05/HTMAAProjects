import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Waves, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
    return (
        <div className="min-h-screen">
            <section
                className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

                <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">

                    <div className="text-center space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                                My Projects
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground">Select a project to explore</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
                        {/* Manège de Poséidon Card */}
                        <Link to="/manege" className="group">
                            <div className="h-full bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-elegant hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center gap-6 group-hover:bg-card/60">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                    <Waves className="w-10 h-10 text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                                        Le Manège de Poséidon
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A manual fish carousel creating organic movement. Explore the design, mechanism, and the journey of creating this mechanical wonder.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                                        View Project →
                                    </Button>
                                </div>
                            </div>
                        </Link>

                        {/* Project X Card */}
                        <Link to="/project-x" className="group">
                            <div className="h-full bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-elegant hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center gap-6 group-hover:bg-card/60">
                                <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
                                    <Rocket className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                                        Project X
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Something exciting is coming soon. A sneak peek into the next big innovative idea currently in development.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                                        View Project →
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Footer */}
                    <footer className="text-center text-muted-foreground pt-12">
                        <p className="text-sm">
                            © {new Date().getFullYear()} - Alexandre LE PORT
                        </p>
                    </footer>

                </div>
            </section>
        </div>
    );
};

export default Index;
