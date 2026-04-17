import { motion } from "framer-motion";
import { Zap, Code2 } from "lucide-react";

const skills = [
    {
        category: "AI Automation & Voice Agents",
        icon: <Zap className="w-6 h-6 text-purple-400" />,
        description: "Building intelligent automation workflows and voice-powered systems",
        items: ["n8n", "Make.com", "Vapi", "OpenAI APIs", "Google Stitch", "Base44"],
        colors: ["bg-purple-500/10 text-purple-400 border-purple-500/20", "bg-blue-500/10 text-blue-400 border-blue-500/20", "bg-pink-500/10 text-pink-400 border-pink-500/20", "bg-orange-500/10 text-orange-400 border-orange-500/20", "bg-red-500/10 text-red-400 border-red-500/20", "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"],
    },
    {
        category: "Core Technical Skills",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        description: "Fundamental programming and data manipulation expertise",
        items: ["Python", "C++", "SQL/PL-SQL", "Pandas", "NumPy", "Power BI"],
        colors: ["bg-blue-500/10 text-blue-400 border-blue-500/20", "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", "bg-green-500/10 text-green-400 border-green-500/20", "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", "bg-rose-500/10 text-rose-400 border-rose-500/20", "bg-amber-500/10 text-amber-400 border-amber-500/20"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the technologies I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background transition-colors flex-shrink-0">
                                    {skill.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg mb-1">{skill.category}</h3>
                                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {skill.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        className={`px-3 py-2 rounded-lg border transition-all duration-200 text-center text-xs font-medium cursor-pointer ${skill.colors[itemIndex % skill.colors.length]}`}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
