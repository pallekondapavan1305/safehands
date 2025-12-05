import React, { useEffect, useRef } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './neon-button';

interface AnimatedBorderCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  onApplyClick?: () => void;
}

const AnimatedBorderCard: React.FC<AnimatedBorderCardProps> = ({
  icon: Icon,
  title,
  description,
  borderColor,
  onApplyClick,
}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5; // Animation speed

      // Calculate positions based on time
      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;

      // Apply positions to elements
      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;

      requestAnimationFrame(animateBorder);
    };

    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Color mapping for border gradients - using full class names for Tailwind JIT
  const getBorderColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'via-blue-500/50',
      green: 'via-green-500/50',
      purple: 'via-purple-500/50',
      orange: 'via-orange-500/50',
      pink: 'via-pink-500/50',
    };
    return colors[color] || 'via-blue-500/50';
  };

  const getDotColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500',
    };
    return colors[color] || 'bg-blue-500';
  };

  const getGradientClass = (color: string) => {
    const gradients: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600',
    };
    return gradients[color] || 'from-blue-500 to-blue-600';
  };

  const borderColorClass = getBorderColorClass(borderColor);
  const dotColorClass = getDotColorClass(borderColor);
  const gradientClass = getGradientClass(borderColor);

  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300 group transform hover:-translate-y-2">
      {/* Animated border elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={topRef}
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent ${borderColorClass} to-transparent`}
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div
          ref={rightRef}
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent ${borderColorClass} to-transparent`}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={bottomRef}
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent ${borderColorClass} to-transparent`}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div
          ref={leftRef}
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent ${borderColorClass} to-transparent`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradientClass} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        <Button
          onClick={onApplyClick}
          variant="ghost"
          neon={true}
          size="sm"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all touch-manipulation text-sm sm:text-base"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${dotColorClass} animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      <div className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${dotColorClass} animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    </div>
  );
};

export default AnimatedBorderCard;
