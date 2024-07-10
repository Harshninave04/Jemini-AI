"use client"
import { Context } from '@/context/ContextProvider';
import { CircleUserRound, Send, UserRound } from 'lucide-react';
import React, { useContext } from 'react';

const GeminiBody = () => {
  const { submit, recentPrompt, displayResults, loading, results, input, setInput } =
    useContext(Context);
  return (
    <>
      <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
        <div className="flex items-center justify-between p-4 text-gray-400 text-xl">
          <p className="text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-yellow-50 font-bold cursor-pointer animate-bounce hover:animate-none">
            JEMINI
          </p>

          <CircleUserRound size={40} className="text-softTextColor cursor-pointer" />
        </div>
        <div className="max-w-[900px] m-auto">
          {!displayResults ? (
            <>
              <div className="my-8 font-medium p-5 leading-tight bg-gray-800 rounded-xl">
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
              <div class="mx-8 my-14 grid grid-cols-1 md:grid md:grid-cols-2 gap-4 ">
                {' '}
                <div class=" h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold bg-gradient-to-l from-yellow-50 to-orange-50 animate-pulse">
                  <p class="px-5 py-2 text-gray-800 text-base">
                    Write a thank you note
                    <p className="text-gray-400 text-sm">to my boss</p>
                  </p>
                </div>
                <div class=" h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold bg-gradient-to-r from-yellow-50 to-orange-50 animate-pulse">
                  <p class="px-5 py-2 text-gray-700 text-base">
                    Ideas to surprise a friend
                    <p className="text-gray-400 text-sm"> on their birthday</p>
                  </p>
                </div>
                <div class=" h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold bg-gradient-to-b from-yellow-50 to-orange-50 animate-pulse">
                  <p class="px-5 py-2 text-gray-700 text-base">
                    Help me write a refund email
                    <p className="text-gray-400 text-sm">for a product that’s damaged draw</p>
                  </p>
                </div>
                <div class=" h-16 border-gray-100 bg-gray-200 rounded-xl shadow-md overflow-hidden font-bold bg-gradient-to-t from-yellow-50 to-orange-50 animate-pulse">
                  <p class="px-5 py-2 text-gray-700 text-base">
                    Recommend new types of water sports,
                    <p className="text-gray-400 text-sm"> including pros & cons</p>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className=" my-10 flex items-center gap-5">
                <UserRound size={40} className="text-softTextColor" />
                <p className="text-xl text-softTextColor">{recentPrompt}</p>
              </div>
              <div className="flex items-start gap-5 text-gray-400">
                <img
                  src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                  alt=""
                  className="w-8 h-8"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: results }}
                  className="text-md loading-5 font-normal"></p>
              </div>
            </div>
          )}
          {/* Form */}
          <div className="absolute max-w-[900px] bottom-0 w-full m-auto px-5">
            <form action={submit}>
              <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder="Ask something..."
                  className="border-none outline-none p-2 w-full text-softTextColor bg-transparent"
                />
                <div className="flex cursor-pointer">
                  <Send size={25} type="submit" />
                </div>
              </div>
              <div>
                <p className="flex items-center justify-center text-xs text-softTextColor p-2">
                  Jemini may display inaccurate info, including about people, so double-check its
                  responses. Your privacy and Jemini Apps
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiBody;
