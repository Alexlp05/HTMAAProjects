import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, Github, Terminal, Cpu, Code2, BookOpen, Play, Pause } from "lucide-react";
import vgaHero from "@/assets/vga_hero.png";
import circuitHero from "@/assets/project2/circuit_hero.jpg";
import arduinoSetup from "@/assets/project2/arduino_setup.jpg";
import bytebeatAudio from "@/assets/project2/bytebeat_audio.wav";
// Updated assets from photo folder
import componentList from "@/assets/project2/composants_raspberry.jpeg";
import schematicImg from "@/assets/project2/schematic.png";
import { useState, useRef } from "react";

const ProjectX = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
                    </Link>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild className="text-primary font-bold bg-primary/10">
                            <Link to="/project-x">Home</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-1">Hardware</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-2">Software</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-3">Logs</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden"
                style={{
                    backgroundImage: `url(${vgaHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80 backdrop-blur-[2px]" />

                <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
                            Arduino Project
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                            VGA Synth<br />
                            <span className="text-muted-foreground">& ByteBeat</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary pl-6">
                            8-bit video and sound generation synchronized on a single Arduino Uno.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to="/project-2/part-1">
                                <Button size="lg" className="rounded-full px-8">
                                    Start Guide <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <a href="/downloads/vga_synth.ino" download>
                                <Button variant="outline" size="lg" className="rounded-full px-8">
                                    <Download className="mr-2 w-4 h-4" /> Source Code
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200 group">
                        <div className="aspect-video bg-muted rounded-xl border border-border overflow-hidden shadow-2xl">
                            <img
                                src={arduinoSetup}
                                alt="Final Assembly"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads & Sources */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold">Resources & Downloads</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Everything needed to replicate the project.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

                        {/* Card 1: KiCad Schematic */}
                        <div className="bg-card hover:bg-card/80 transition-all p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4 group">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border/50">
                                <img src={schematicImg} alt="KiCad Schematic" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">KiCad Schematic (UNO)</h3>
                                <p className="text-sm text-muted-foreground">Wiring Diagram for Arduino</p>
                            </div>
                            <a href="/downloads/schematic.png" download className="mt-auto">
                                <Button variant="secondary" size="sm" className="w-full">
                                    <Download className="mr-2 w-4 h-4" /> Download Schematic
                                </Button>
                            </a>
                        </div>

                        {/* Card 2: Arduino Code */}
                        <div className="bg-card hover:bg-card/80 transition-all p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-4 group md:col-span-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Code2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Arduino Source Code</h3>
                                <p className="text-sm text-muted-foreground">Main .ino Sketch</p>
                            </div>
                            <a href="/downloads/vga_synth.ino" download className="w-full max-w-xs">
                                <Button variant="secondary" size="sm" className="w-full">
                                    <Download className="mr-2 w-4 h-4" /> Download .ino
                                </Button>
                            </a>
                            <a href="https://github.com/smaffer/vgax" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs mt-2">
                                <Button variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-primary">
                                    <Github className="mr-2 w-4 h-4" /> VGAX Library
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multimedia Demo */}
            <section className="py-24 border-t border-border">
                <div className="max-w-5xl mx-auto px-4 space-y-12">
                    <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">Project Demo</h2>
                        <div className="text-muted-foreground space-y-4 leading-relaxed">
                            <p>
                                At the core of the device lies a complete fusion of audio and video. The white line cutting across the screen isn't just a simple animation: it is the raw representation of the ByteBeat signal—a direct visualization of the electricity generating the sound you hear.
                            </p>
                            <p>
                                In the background, a hypnotic spiral structures the space. However, the experience becomes interactive through the potentiometer: acting as a temporal amplifier, it allows the user to seize control of the spiral. With a simple gesture, you can freeze time, speed up the rotation, or violently reverse the flow, creating a tense dialogue between the unwavering melody and the visual chaos of the background.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="aspect-video bg-black rounded-xl border border-border shadow-xl overflow-hidden">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/WGuRBJCneys"
                                    title="VGA Synth Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-sm text-muted-foreground text-center italic">
                                Real-time VGA signal visualization. The spiral inversion is a hardware artifact caused by the amplifier.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-card border border-border p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-block px-2 py-1 bg-secondary rounded text-xs font-semibold text-secondary-foreground mb-4">
                                        ISOLATION TRACK
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">ByteBeat Audio</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Raw audio channel generated by the ByteBeat algorithm. The sound curve visualized here is the exact sample used for the composition created by Maxime.
                                    </p>
                                </div>

                                <div className="space-y-6 py-6">
                                    <div className="flex items-center justify-center">
                                        <Button
                                            size="icon"
                                            onClick={toggleAudio}
                                            className={`w-16 h-16 rounded-full shadow-lg transition-transform ${isPlaying ? 'scale-95' : 'hover:scale-105'}`}
                                        >
                                            {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
                                        </Button>
                                    </div>

                                    {/* Simple visualizer bars */}
                                    <div className="flex items-end justify-center gap-1 h-8">
                                        {Array.from({ length: 12 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 bg-primary rounded-t transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-1.5 opacity-30'}`}
                                                style={{ height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : '20%' }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <audio ref={audioRef} src={bytebeatAudio} onEnded={() => setIsPlaying(false)} className="hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-muted-foreground border-t border-border">
                <p className="text-sm">
                    © {new Date().getFullYear()} - Paul SIMMONET, Maxime VIAL, Alexandre LE PORT
                </p>
            </footer>
        </div>
    );
};

export default ProjectX;
