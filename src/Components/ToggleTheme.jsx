import React, { useContext } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Moon } from 'lucide-react';
import { Context } from '@/context/ContextProvider';
import { Switch } from '@nextui-org/switch';

const ToggleTheme = () => {
  const { theme, toggle } = useContext(Context);
  const handleThemeChange = () => {
    toggle();
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <p variant="outline" className="text-softTextColor">
            Settings
          </p>
        </PopoverTrigger>
        <PopoverContent className="w-56 bg-gray-100 ml-10 my-2 p-3 rounded-xl">
          <div className="inline-flex items-center gap-8">
            <div className="inline-flex items-center gap-3">
              <Moon size={20} className="text-softTextColor" />
              <p>Dark theme</p>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden relative">
              {/* <Switch
              defaultSelected
              aria-label="Automatic updates"
              type="checkbox"
              checked={theme === 'dark'} // Set checkbox state based on theme
              onChange={handleThemeChange} // Call toggle function on change
            /> */}

              {/* <Switch aria-label="Automatic updates" onChange={handleThemeChange} /> */}
              <Switch
                defaultSelected
                checked={theme === 'dark'} // Set checkbox state based on theme
                color="success"
                onChange={handleThemeChange}
                className="absolute w-full h-full bg-gray-800 rounded-b-full"></Switch>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ToggleTheme;
