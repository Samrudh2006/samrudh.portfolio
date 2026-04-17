import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Internships = () => {
    return (
        <section id="internships" className="py-20 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="bg-badge text-badge-foreground border-border">
                            WORK EXPERIENCE
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">
                            Internships
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Professional experience and key achievements
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-border/50 bg-card/30 backdrop-blur-sm"
                        >
                            <div className="p-4 rounded-full bg-secondary/10 mb-4">
                                <Briefcase className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                            <p className="text-muted-foreground max-w-md leading-relaxed">
                                Currently focused on building projects and expanding my skills.
                                Internship experiences will be added here as my journey progresses.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internships;
