import { motion } from "framer-motion";
import { Zap, Code2 } from "lucide-react";

const techLogos = {
    "n8n": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/n8n/n8n-original.svg",
    "Make.com": "https://cdn.worldvectorlogo.com/logos/make-com.svg",
    "Vapi": "https://www.vapi.ai/favicon.ico",
    "OpenAI APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg",
    "Google Stitch": "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853afc04b39a9d9ac4198e1cd7fbe04ef/google/images/lockup.svg",
    "Base44": "https://www.base44.io/favicon.ico",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "SQL/PL-SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    "Power BI": "https://cdn.worldvectorlogo.com/logos/power-bi.svg",
};

const skills = [
    {
        category: "AI Automation & Voice Agents",
        icon: <Zap className="w-6 h-6 text-purple-400" />,
        description: "Building intelligent automation workflows and voice-powered systems",
        items: ["n8n", "Make.com", "Vapi", "OpenAI APIs", "Google Stitch", "Base44"],
    },
    {
        category: "Core Technical Skills",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        description: "Fundamental programming and data manipulation expertise",
        items: ["Python", "C++", "SQL/PL-SQL", "Pandas", "NumPy", "Power BI"],
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
                                {skill.items.map((item) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{ y: -4 }}
                                        className="flex flex-col items-center p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-200 cursor-pointer group/item"
                                    >
                                        <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
                                            <img
                                                src={techLogos[item]}
                                                alt={item}
                                                className="w-full h-full object-contain opacity-80 group-hover/item:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-center line-clamp-2">
                                            {item}
                                        </span>
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
