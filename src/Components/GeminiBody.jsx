import { CircleUserRound } from 'lucide-react';
import React from 'react';

const GeminiBody = () => {
  return (
    <>
      <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
        <div className="flex items-center justify-between p-4 text-gray-400 text-xl">
          <p className="text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-yellow-50 font-bold cursor-pointer">
            JEMINI
          </p>

          <CircleUserRound size={40} className="text-softTextColor" />
        </div>
        <div className="max-w-[900px] m-auto">
          <div className="my-8 font-medium p-5 leading-tight">
            <p>
              <span className="text-6xl font-bold text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-yellow-50 cursor-not-allowed">
                Hello, Harsh
              </span>
            </p>
            <p className="text-[55px] -tracking-wider text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-50 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 cursor-none">
              What's on your mind today?
            </p>
          </div>
          {/* Cards */}
          <div class="mx-8 my-14 grid grid-cols-2 gap-4">
            {' '}
            <div class="w-80 h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold">
              <p class="px-5 py-2 text-gray-700 text-base">
                Write a thank you note
                <p className="text-gray-400 text-sm">to my boss</p>
              </p>
            </div>
            <div class="w-80 h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold">
              <p class="px-5 py-2 text-gray-700 text-base">
                Write a thank you note
                <p className="text-gray-400 text-sm">to my boss</p>
              </p>
            </div>
            <div class="w-80 h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold">
              <p class="px-5 py-2 text-gray-700 text-base">
                Write a thank you note
                <p className="text-gray-400 text-sm">to my boss</p>
              </p>
            </div>
            <div class="w-80 h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold">
              <p class="px-5 py-2 text-gray-700 text-base">
                Write a thank you note
                <p className="text-gray-400 text-sm">to my boss</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiBody;
