import { useAppTheme } from '@/context/theme/context';
import { Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { toggleTheme } = useAppTheme();

  return (
    <button onClick={toggleTheme}>
      <Sun />
    </button>
  );
};

export default ThemeToggle;
