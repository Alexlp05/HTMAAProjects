import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Zap, Activity } from "lucide-react";
import generatorTest from "@/assets/project2/generator_test.jpg";
import generatorSetup from "@/assets/project2/generator_setup.jpg";
import arduinoSetup from "@/assets/project2/arduino_setup.jpg";
import componentList from "@/assets/project2/composants_raspberry.jpeg";
import schematicImg from "@/assets/project2/circuit_Kicad_raspberry.jpg";

const HardwarePage = () => {
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
                        <Button variant="ghost" size="sm" asChild className="text-primary font-bold bg-primary/10">
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

            <div className="pt-24 max-w-4xl mx-auto px-4 space-y-24">

                {/* Header */}
                <header className="space-y-4 border-b border-border pb-8">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">System Architecture // Module 02</div>
                    <h1 className="text-4xl md:text-5xl font-bold">Hardware & Iterations</h1>
                    <p className="text-xl text-muted-foreground">
                        From Raspberry Pi to Arduino Uno: The quest for raw video signal.
                    </p>
                </header>

                {/* Section 1: Failure */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-destructive">
                        <AlertTriangle className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider">Iteration 01: The Raspberry Pi Failure</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bg-destructive/10 border border-destructive/30 p-8 rounded-xl">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Initial Concept</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                The initial idea was to use a Raspberry Pi Zero to generate the VGA signal via GPIOs, controlled by 3 RGB potentiometers.
                            </p>
                            <h3 className="font-bold text-lg">Why it Failed?</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Raspberry Pi runs an OS (Linux). Preemptive multitasking makes it impossible to generate a <span className="font-bold text-primary">pixel-perfect</span> video signal in real-time. "Jitter" made the image unstable.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-video bg-muted border border-border rounded-lg overflow-hidden">
                                <img src={schematicImg} alt="Raspberry Pi KiCad Schematic" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-video bg-muted border border-border rounded-lg overflow-hidden">
                                <img src={componentList} alt="Raspberry Pi Components" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-center text-muted-foreground">KiCad Schematic (Top) & Component List (Bottom)</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Arduino Solution */}
                <section className="space-y-8 relative">
                    <div className="flex items-center gap-3 text-green-600">
                        <CheckCircle2 className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">The Arduino Solution</h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            Using a passive R-2R DAC (Digital to Analog Converter) to convert Arduino digital signals into VGA voltage levels (0.7V).
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <div className="aspect-video bg-muted border border-border p-1 rounded-lg overflow-hidden">
                                    <img src={generatorSetup} alt="Circuit Setup" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-xs text-center text-muted-foreground">Testing Setup</p>
                            </div>
                            <div className="space-y-2">
                                <div className="aspect-video bg-muted border border-border p-1 rounded-lg overflow-hidden">
                                    <img src={arduinoSetup} alt="VGA Soldering" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-xs text-center text-muted-foreground">VGA Port Soldering</p>
                            </div>
                        </div>

                        {/* Parameters Table */}
                        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                            <div className="px-6 py-4 border-b border-border font-bold text-sm bg-muted/30">
                                System Parameters: DAC Resistor Values
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                    <tr>
                                        <th className="px-6 py-3">Signal</th>
                                        <th className="px-6 py-3">Arduino Pin</th>
                                        <th className="px-6 py-3">Resistor (Ω)</th>
                                        <th className="px-6 py-3">Function</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="bg-muted/10">
                                        <td className="px-6 py-4 font-bold text-primary">VGA_HSYNC</td>
                                        <td className="px-6 py-4 font-mono">D9</td>
                                        <td className="px-6 py-4 font-bold text-yellow-600">470Ω</td>
                                        <td className="px-6 py-4">Horiz. Sync</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-primary">VGA_VSYNC</td>
                                        <td className="px-6 py-4 font-mono">D10</td>
                                        <td className="px-6 py-4 font-bold text-yellow-600">470Ω</td>
                                        <td className="px-6 py-4">Vert. Sync</td>
                                    </tr>
                                    <tr className="bg-muted/10">
                                        <td className="px-6 py-4 font-bold">COLOR_HIGH</td>
                                        <td className="px-6 py-4 font-mono">D6</td>
                                        <td className="px-6 py-4 font-bold text-yellow-600">68Ω</td>
                                        <td className="px-6 py-4">High Bit</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold">COLOR_LOW</td>
                                        <td className="px-6 py-4 font-mono">D7</td>
                                        <td className="px-6 py-4 font-bold text-yellow-600">68Ω</td>
                                        <td className="px-6 py-4 text-xs">
                                            Low Bit mixed with generator channels via 100Ω resistor to isolate the curve.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section 3: Analog Analysis & Function Gen */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-orange-500">
                        <Activity className="w-8 h-8" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Analog Signal Analysis</h2>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-muted-foreground">
                            To ensure stability and add organic textures, we analyzed the output signals using a digital oscilloscope. We also injected analog noise via a function generator.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                                <h4 className="text-orange-500 font-bold mb-4 flex items-center gap-2">
                                    <Zap className="w-4 h-4" /> 63 kHz RAMP
                                </h4>
                                <div className="font-mono text-sm space-y-2">
                                    <div className="flex justify-between border-b border-border/50 pb-1">
                                        <span className="text-muted-foreground">Frequency</span>
                                        <span className="font-bold">63.00 kHz</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border/50 pb-1">
                                        <span className="text-muted-foreground">Waveform</span>
                                        <span>Ramp (Sawtooth)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Application</span>
                                        <span>Scanline Sync</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                                <h4 className="text-blue-500 font-bold mb-4 flex items-center gap-2">
                                    <Activity className="w-4 h-4" /> 57 kHz PULSE
                                </h4>
                                <div className="font-mono text-sm space-y-2">
                                    <div className="flex justify-between border-b border-border/50 pb-1">
                                        <span className="text-muted-foreground">Frequency</span>
                                        <span className="font-bold">57.00 kHz</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border/50 pb-1">
                                        <span className="text-muted-foreground">Waveform</span>
                                        <span>Pulse (Square)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Application</span>
                                        <span>Pixel Clock / Timing</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="aspect-[4/3] bg-black rounded-lg overflow-hidden border-2 border-orange-500/30 shadow-2xl relative">
                                <img src={generatorTest} alt="Oscilloscope Setup" className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 text-xs font-mono text-orange-400">
                                    &gt; OSCILLOSCOPE INPUT: CH1 [ON]
                                </div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground">Oscilloscope Measurements & Function Generator</p>
                        </div>
                    </div>
                </section>

                <div className="flex justify-between pt-12 border-t border-border">
                    <Link to="/project-x">
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Home
                        </Button>
                    </Link>
                    <Link to="/project-2/part-2">
                        <Button>
                            Next: Software <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                {/* Footer */}
                <footer className="py-8 text-center text-muted-foreground border-t border-border">
                    <p className="text-sm">
                        © {new Date().getFullYear()} - Paul SIMONET, Maxime VIAL, Alexandre LE PORT
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default HardwarePage;
