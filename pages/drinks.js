/* eslint-disable prettier/prettier */
import React from 'react'
import StyledHeroDrinks from '../components/HeroDrinks';
import { Heading1 } from '@/components/Headings/Heading1.styles'
import Image from 'next/image';
import  { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Ganter from '../components/icons/svg/SVGGanter'
import Astra from '../components/icons/svg/SVGAstra'
import Flensburger from '../components/icons/svg/SVGFlensburger'

export default function Drinks()  {
      
  
      const [tabelleBL, setTabelleBL] = useState([])
  


      const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
      const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
      const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
      const url3 = "https://api.randomuser.me/";
      const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"



        
      
        return (
          <>


          
<StyledHeroDrinks>

<div className="mt-">
                        <Heading1 className='transform translate-y-24'>Drinks & Snacks</Heading1>
          </div>

<h1 className='mt-20 text-red-800 text-center text-7xl'>Biere</h1>

<div className="mt-10 mx-auto w-11/12 h-full grid grid-cols-4 grid-rows-10 text-gray-300 font-black gap-10 justify-around items-center md:text-sm">
<div className="w-2/12 h-24 "><Ganter height={75} width={75} backgroundColour={'#ffffff'}></Ganter></div>
  <div className="w-10/12 h-24  text-xs text-center lg:text-5xl">Ganter-Bier</div>
  <div className="w-10/12 h-24  text-xs text-center lg:text-5xl">0.33 Liter</div>
  <div className="w-10/12 h-24  text-xs text-right lg:text-5xl">3.80 Eur</div>

<div className="w-2/12 h-24 "><Astra height={75} width={75} backgroundColour={'#ffffff'}></Astra></div>
<div className="w-10/12 h-24  text-xs text-center lg:text-5xl">Astra-Bier</div>
<div className="w-10/12 h-24  text-xs text-center lg:text-5xl">0.33 Liter</div>
<div className="w-10/12 h-24  text-xs text-right lg:text-5xl">3.90 Eur</div>


<div className="w-2/12 h-24 "><Flensburger height={75} width={75} backgroundColour={'#ffffff'}></Flensburger></div>
<div className="w-10/12 h-24  text-xs text-center text-5xl">Flensburger</div>
<div className="w-10/12 h-24  text-xs text-center text-5xl">0.33 Liter</div>
<div className="w-10/12 h-24  text-xs text-right text-5xl">4.20 Eur</div>     

 
</div>

</StyledHeroDrinks>
          
                 
             
          
          </>)}