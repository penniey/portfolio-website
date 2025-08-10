import { useEffect, useState } from 'react';
import './Rain.css';

interface RainDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const Rain: React.FC = () => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const colors = ['#60a5fa', '#a78bfa', '#3b82f6', '#8b5cf6'];
    const drops: RainDrop[] = [];

    // Create 40 rain drops for hero section only
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = 2 + Math.random() * 2; // 2-4s duration
      const delay = Math.random() * 4;

      drops.push({
        id: i,
        x,
        delay,
        duration,
        color,
        size: 1 + Math.random() * 1.5,
      });
    }

    setRainDrops(drops);
  }, []);

  return (
    <>
      {/* Rain container - only for hero section */}
      <div className="hero-rain-container">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="hero-rain-drop"
            style={{
              left: `${drop.x}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
              backgroundColor: drop.color,
              width: `${drop.size}px`,
              boxShadow: `0 0 6px ${drop.color}`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Rain;
