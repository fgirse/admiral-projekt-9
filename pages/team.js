/* eslint-disable prettier/prettier */
import React from 'react';
import StyledHeroTeam from '../components/HeroTeam';
import Image from 'next/image';
import { StyledButton } from "@/components/Buttons/Button.styles"
import { Heading1 } from "@/components/Headings/Heading1.styles";
import StyledHeroSportarena from "@/components/HeroSportarena";
import SVGSCFreiburgEmblem from "../components/icons/svg/SvgScFreiburg.js"
import DataSCFreiburg from 'components/DataSCFreiburg.js'
import LogoAlt from '../components/icons/svg/logoAlt';


const team = () => {
  return (
  
  <>
      <div className='mx-auto'>

      <StyledHeroTeam>

      
            <section className="mt-10 py-12 px-4 text-center md:mt-0">

                <div className='-mt-20  md:mt-0'>
                <LogoAlt className=" mx-auto" width="30vw" height=""></LogoAlt>
                </div>
            
                <div className='mx-auto w- h-20'>
                <Heading1>DAS TEAM</Heading1>
                </div>
            
            
            
            <div className="flex flex-wrap -mx-8">
            <div className="mx-auto px-0 w-8/12 md:w-1/3 md:mt-0 xl:p-36">
            <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/matrose.png" layout="responsive" width="100" height="120" alt="Portrait"/>
            <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Simon</h3>
            <span className="mt-10 text-2xl text-gray-100 font-bold md:mt-0">Obermaat</span>
            <p className="mt-md:mt-4  text-1xl text-gray-300 leading-relaxexl:text 2xl                                                                                                                                                                                                                                                                                                                                                                                                              ld">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben studiert Simon an der Uni Erziehungswissenschaften und hat gerade seinee Master absolviert. Simon ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team zu den Auswärtsspielen</p>
            </div> 
            <div className="mx-auto mt-10 w-8/12 md:w-1/3 xl:p-36 md:mt-0 md:border-l">
            <Image className="p-10 w-1/3 mx-auto mb-4 rounded-full" src="/portrait-mick1.png" layout="responsive" width="100" height="120" alt="Portrait"/>
            <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Mick</h3>
            <span className="mt-10 text-2xl text-gray-100 font-bold md:mt-0">Captain</span>
            <p className="mt-4 text-1xl text-gray-300 leading-relaxed">Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des Rettungsankers initiert und liessen den Kahn in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten verantwortungsvoll durch die hohen Wogen </p>
            </div>
            <div className="mx-10 mt-10 w-8/12 md:mt-0 :w-1/3 xl:p-36 md:border-l">
            <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/offizierin.png" layout="responsive" width="100" height="120" alt="Portrait"/>
            <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Anne</h3>
            <span className="mt-10 text-2xl text-gray-100 font-bold md:mt-0">I. Offizierin</span>
            <p className="mt-4 text-1xl xl:text-1xl text-gray-300 leading-relaxed">Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung  ist sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
            </div>
            </div>
            </section>


</StyledHeroTeam>

      </div>
     
  </>
  )
}

export default team