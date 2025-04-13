import React from 'react';

interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  href: string;
}

const IconLink = ({ icon, href, className = '', ...props }: IconLinkProps) => {
  return (
    <a
      href={href}
      className={`border border-input flex items-center justify-center size-8 rounded-full bg-white shadow-xs hover:bg-accent dark:bg-card dark:hover:bg-background/50 outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors duration-300 ${className}`}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {icon}
    </a>
  );
};

export default IconLink;
