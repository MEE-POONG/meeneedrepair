import React from 'react';

const NetflixProfileSelection: React.FC = () => {
  return (
    <div className="min-h-screen w-full select-none md:place-items-start bg-gradient-to-b from-gray-800 to-black px-20 py-10 align-middle justify-center">
      <div className="w-full grid place-items-center md:place-items-start">
        <img
          className="w-40 inline-block"
          src="/images/LOGO.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="w-full grid place-items-center mt-10">
        <p className="text-white text-3xl md:text-6xl font-normal text-center">
          ให้คำปรึกษา
        </p>
        <div className="flex flex-wrap w-full gap-x-10 gap-y-16 mt-20 justify-center text-center">
          <div className="w-44 h-44 pt-2 rounded-lg hover:border-4 cursor-pointer bg-[url(https://i.pinimg.com/474x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg)] bg-cover">
            <p className="text-gray-300 text-xl md:text-2xl mt-44">ช่างคนที่ 1</p>
          </div>
          <div className="w-44 h-44 pt-2 rounded-lg hover:border-4 cursor-pointer bg-[url(https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png)] bg-cover">
            <p className="text-gray-300 text-xl md:text-2xl mt-44">ช่างคนที่ 2</p>
          </div>
        
        </div>
        <button className="border-2 inline-block mt-20 md:mt-36 border-gray-600 font-thin text-gray-400 text-xl md:text-2xl px-8 py-2">
          Gerenciar perfis
        </button>
      </div>
    </div>
  );
};

export default NetflixProfileSelection;
