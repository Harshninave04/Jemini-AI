'use client';
import React, { useContext, useState } from 'react';
import { Menu, Plus, CircleHelp, Settings, History, Locate, MessageSquare } from 'lucide-react';
import ToggleTheme from './ToggleTheme';
import { Context } from '@/context/ContextProvider';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setDisplayResults, setInput, prevPrompt,setRecentPrompt, submit  } = useContext(Context);

  const loadPrompt = (item) => {
    setRecentPrompt(item);
    submit(item);
  };
  
  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor pt-6 px-[13px]">
      <div className="">
        <Menu
          strokeWidth={1.5}
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-softTextColor ml-[6px]"
        />
        <div
          className="mt-14 text-sm inline-flex items-center gap-[14px] border rounded-full px-[10px] py-[9px] bg-gray-200 text-gray-700 cursor-pointer"
          onClick={() => {
            setDisplayResults(false), setInput('');
          }}>
          <Plus size={20} className="" />
          {isOpen ? <p className="font-medium">New chat</p> : null}
        </div>
        {isOpen ? (
          <div className="flex flex-col">
            <p className="mt-6 ml-[6px] text-sm cursor-pointer font-semibold text-softTextColor">
              Recent
            </p>
            {prevPrompt?.map((item, index) => (
              <div
                key={index}
                onClick={()=>loadPrompt(item)}
                className="flex items-center gap-3 mt-1 p-3 cursor-pointer text-softTextColor hover:bg-[#45474a] hover:rounded-full">
                <MessageSquare size={20} className=" text-softTextColor" />
                <p>{item?.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="gap-6 flex flex-col mb-6">
        <div className="flex flex-col gap-4 text-sm ml-[6px]">
          <div className="flex cursor-pointer items-center gap-[16px] pr-2.5">
            <CircleHelp size={20} className="text-softTextColor" />
            {isOpen ? (
              <p className="cursor-pointer font-semibold text-softTextColor">
                Help 
              </p>
            ) : null}
          </div>
          <div className="flex cursor-pointer items-center gap-[16px] pr-2.5">
            <History size={20} className="text-softTextColor" />
            {isOpen ? (
              <p className="cursor-pointer font-semibold text-softTextColor">
                History
              </p>
            ) : null}
          </div>
          <div className="flex cursor-pointer items-center gap-[16px] pr-2.5">
            <Settings size={20} className="text-softTextColor" />
            {isOpen ? (
              <p className="cursor-pointer font-semibold text-softTextColor">
                <ToggleTheme />
              </p>
            ) : null}
          </div>
        </div>
        {isOpen ? (
          <div className="flex items-start text-sm w-64">
            <Locate size={32} className="text-softTextColor ml-2" />
            {isOpen ? (
              <p className="text-softTextColor text-wrap text-xs pl-5">
                Sitabuldi, Nagpur, Maharashtra, India Based on your places (home) • Update location
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
