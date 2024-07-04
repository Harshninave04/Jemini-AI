'use client';
import React, { useState } from 'react';
import { Menu, Plus } from 'lucide-react';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
        <Menu
          strokeWidth={1.5}
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-softTextColor"
        />
        <div className="mt-14 text-sm inline-flex items-center gap-4 border rounded-full px-3 py-[9px] bg-gray-200 text-gray-700 cursor-pointer">
          <Plus size={20} className="" />
          {isOpen ? <p className="font-medium">New chat</p> : null}
        </div>
        <p className="mt-8 text-sm cursor-pointer text-softTextColor font-semibold">Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
