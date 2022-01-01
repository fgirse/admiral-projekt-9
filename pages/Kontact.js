import React from 'react'
import StyledHeroWohin from '../components/HeroWohin';
import Heading2 from '@/components/Headings/Heading2'; 
import Image from 'next/image';
import Modal from '../components/Modal'
const Kontact = () => {
    return (
        <div>
            <>
        <div className="mx-auto">
         <StyledHeroWohin                                     >
            
              <Heading2 className="">Lageplan</Heading2>
    
            
            <div className="mx-auto w-5/12 h-60 mt-4 flex flex-col items-start justify-center gapy-5">
                
                    <div className="bg-gray-900 opacity-80">
                       <p className='text-gray-300 text-4xl bg-transparent'>Adelhauserstrasse 7c</p>
                       <p className='text-gray-300 text-4xl bg-transparent'>79098 Freiburg</p>
                       <p className='text-gray-300 text-4xl bg-transparent'>Haltestelle Holzmarkt</p>
                       <p className='text-gray-300 text-4xl bg-transparent'>Linie 1 - 3 und 5</p>
                    </div>

                    <div className="mt-12">
                        <Modal></Modal>
                    </div>
            </div>
        </StyledHeroWohin>
                                          
        </div>
        </> 
        </div>
    )
}

export default Kontact
