import React from 'react'
import HeroSection from '../HeroSection';
import HeaderSection from '../HeaderSection';
import { homeObjOne, homeObjThree} from './DataInformasi';

export default function Informasi(){
    return (
      <>
      <HeaderSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
        </>
      );
}