import ThemeToggle from './ThemeToggle';

const AppHeader = () => {
  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-0'>
      <div className='flex items-center justify-between h-24'>
        <h1 className='font-bold text-lg'>JF</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default AppHeader;
