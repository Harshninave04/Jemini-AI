import React, { useContext } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Moon } from 'lucide-react';
import { Context } from '@/context/ContextProvider';
import { Switch } from '@radix-ui/react-switch';

const ToggleTheme = () => {
  const { theme, toggle } = useContext(Context);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <p variant="outline" className="text-softTextColor">
            Settings
          </p>
        </PopoverTrigger>
        <PopoverContent className="w-[242px] bg-white ml-10 my-2 p-3 rounded-xl">
          <div className="inline-flex items-center gap-12">
            <div className="inline-flex items-center gap-3">
              <Moon size={20} className="text-softTextColor" />
              <p>Dark theme</p>
            </div>
            <div>
              <Switch />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ToggleTheme;
