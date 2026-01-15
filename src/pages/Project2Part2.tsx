import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Code, Terminal, Cpu, ExternalLink } from "lucide-react";

const SoftwarePage = () => {
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
                        <Button variant="ghost" size="sm" asChild className="text-primary font-bold bg-primary/10">
                            <Link to="/project-2/part-2">Software</Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
                            <Link to="/project-2/part-3">Logs</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            <div className="pt-24 max-w-4xl mx-auto px-4 space-y-24">

                {/* Header */}
                <header className="space-y-4 border-b border-border pb-8">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">System Kernel // Module 03</div>
                    <h1 className="text-4xl md:text-5xl font-bold">Software & Algorithms</h1>
                    <p className="text-xl text-muted-foreground">
                        "Bare-Metal" optimization and procedural generation.
                    </p>
                </header>

                {/* Section 1: VGAX */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-primary">
                        <Terminal className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">The VGAX Library</h2>
                    </div>

                    <div className="prose prose-slate max-w-none text-muted-foreground">
                        <p>
                            Generating a VGA signal on an ATmega328p (16MHz) requires extreme precision. The <strong>VGAX</strong> library uses Timer1 to generate HSYNC and VSYNC interrupts, leaving very little CPU time for drawing (the "Back Porch").
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm">
                        <h3 className="font-bold">Installation & Setup</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground font-mono text-sm">
                            <li>Download the .zip from GitHub.</li>
                            <li>Extract to <span className="text-primary">Documents/Arduino/libraries/</span>.</li>
                            <li>Include in sketch: <span className="text-blue-500">#include &lt;VGAX.h&gt;</span></li>
                        </ol>

                        <div className="pt-4">
                            <a href="https://github.com/smaffer/vgax" target="_blank" rel="noopener noreferrer">
                                <Button className="gap-2">
                                    <ExternalLink className="w-4 h-4" /> Go to VGAX Library (GitHub)
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section 2: Code Implementation */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-blue-600">
                        <Code className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Arduino Implementation</h2>
                    </div>

                    <p className="text-muted-foreground">
                        Below is the core loop used to generate the visual patterns. We use direct port manipulation for speed.
                    </p>

                    <div className="bg-slate-950 text-slate-50 p-6 rounded-xl border border-slate-800 shadow-xl overflow-x-auto">
                        <pre className="text-xs md:text-sm font-mono leading-relaxed">
                            {`#include <VGAX.h>

VGAX vga;

// ByteBeat formula variables
unsigned long t = 0;

void setup() {
  vga.begin();
}

void loop() {
  // Main rendering loop
  // We draw 120x60 pixels
  
  for (int y = 0; y < VGAX_HEIGHT; y++) {
    for (int x = 0; x < VGAX_WIDTH; x++) {
      
      // Update time/pattern
      t++; 
      
      // Calculate color using ByteBeat formula
      // Valid colors: 0 (Black), 1 (White), 2 (Red), 3 (Cyan)... depending on port bits
      byte color = (t * (t >> 5 | t >> 8)) & 3; 
      
      // Put pixel on screen
      vga.putpixel(x, y, color);
    }
  }
}`}
                        </pre>
                    </div>
                </section>

                {/* Section 3: ByteBeat */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-purple-600">
                        <Cpu className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">ByteBeat Algorithm</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                The visual pattern mirrors the audio structure. We use the same variable <code>t</code> to drive both the audio speaker (via PWM) and the video pixel color.
                            </p>
                            <a href="https://dollchan.net/bytebeat/" target="_blank" className="inline-flex items-center text-sm text-primary hover:underline pb-0.5">
                                Source: Dollchan/Bytebeat <ArrowRight className="ml-1 w-3 h-3" />
                            </a>
                        </div>
                        <div className="bg-slate-950 text-slate-50 border border-slate-800 p-6 rounded-xl shadow-inner">
                            <code className="text-purple-400 text-lg font-bold">
                                t * (t &gt;&gt; 5 | t &gt;&gt; 8)
                            </code>
                            <div className="mt-4 text-xs text-slate-500 font-mono border-t border-slate-800 pt-2">
                                // t = time (incremented each loop)
                                <br />// &gt;&gt; = bitwise shift right
                                <br />// | = bitwise OR
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex justify-between pt-12 border-t border-border">
                    <Link to="/project-2/part-1">
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Hardware
                        </Button>
                    </Link>
                    <Link to="/project-2/part-3">
                        <Button>
                            Next: Logs & Reflections <ArrowRight className="ml-2 h-4 w-4" />
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

export default SoftwarePage;
