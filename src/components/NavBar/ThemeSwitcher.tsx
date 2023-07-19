'use client';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        className='border border-lime-500'
        onClick={() => setTheme('light')}
      >
        Light Mode
      </button>
      <button
        className='border border-red-400'
        onClick={() => setTheme('dark')}
      >
        Dark Mode
      </button>
    </div>
  );
}
