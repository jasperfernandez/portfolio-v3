import React from 'react';

interface IconLinkProps {
  icon: React.ReactNode;
  href: string;
  className?: string;
}

const IconLink = ({ icon, href, className = '' }: IconLinkProps) => {
  return (
    <a
      href={href}
      className={`border border-border flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-100 dark:bg-background dark:hover:bg-primary-foreground transition-colors ${className}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  );
};

export default IconLink;
