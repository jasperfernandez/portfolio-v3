import React from 'react';

interface SkillBoxProps {
  title: string;
  logo: React.ReactNode;
  className?: string;
}

const SkillBox = ({ title, logo, className = '' }: SkillBoxProps) => {
  return (
    <div
      className={`border border-border flex gap-1 p-2 rounded-md items-center justify-center bg-white hover:bg-gray-100 dark:bg-card dark:hover:bg-background/50 transition-colors duration-300 ${className}`}
    >
      {logo}
      <span className='text-xs font-semibold'>{title}</span>
    </div>
  );
};

export default SkillBox;
