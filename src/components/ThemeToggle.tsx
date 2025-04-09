import { useAppTheme } from '@/context/theme/context';
import { Toggle } from '@/components/ui/toggle';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <Toggle
      variant='outline'
      className='group data-[state=on]:hover:bg-muted rounded-full data-[state=on]:bg-transparent'
      pressed={theme === 'dark'}
      size={'sm'}
      onPressedChange={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
      <Moon
        size={16}
        className='shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100'
        aria-hidden='true'
      />
      <Sun
        size={16}
        className='absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0'
        aria-hidden='true'
      />
    </Toggle>
  );
};

export default ThemeToggle;
