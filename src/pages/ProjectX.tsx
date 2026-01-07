import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const ProjectX = () => {
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

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="mb-8">
                        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                            ← Back to Projects
                        </Link>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                            Project X
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Coming soon...
                    </p>

                    <div className="w-64 h-64 bg-secondary/50 rounded-xl mx-auto flex items-center justify-center border-2 border-dashed border-primary/30">
                        <span className="text-4xl">🚀</span>
                    </div>

                    <p className="text-muted-foreground">
                        This project is currently under development. Stay tuned!
                    </p>

                    <div className="pt-8">
                        <Link to="/">
                            <Button className="gradient-hero">
                                Return Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectX;
