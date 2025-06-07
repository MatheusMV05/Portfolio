import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;