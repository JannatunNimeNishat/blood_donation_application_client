import CountSection from '@/components/ui/HomePage/CountSection/CountSection';
import HelpPeopleInNeed from '@/components/ui/HomePage/HelpPeopleInNeed/HelpPeopleInNeed';
import HeroSection from '@/components/ui/HomePage/HeroSection/HeroSection';
import React from 'react';

const HomePage = () => {
  return (
    <div className="">
      <div className='bg-gray-200'>
     <HeroSection/> 
      </div>
     <div className=' max-w-[1440px] mx-auto'>
     <HelpPeopleInNeed/>
     </div>
     <CountSection/>
    </div>
  );
};

export default HomePage;