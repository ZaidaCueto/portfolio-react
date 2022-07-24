import React from 'react';
import Image from 'next/image';
import FotoPerfil from './public/imgs/imgPerfil.png';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';


import { TbArrowBigDownLines } from 'react-icons/tb';

export default function Sidebar() {
    return (
        <div>
            <Image src={FotoPerfil} alt="user avatar"
                width={200} height={200}
                className="w-32 h-32 rounded-full max-auto"
            />

            <h3 className="my-4 text-3xl font-medium tracking-wider">
                <span>Zaida</span>
                Cueto
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Font-end Developer
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name">
                <TbArrowBigDownLines className='w-6 h-6' />Download Resume
            </a>
            {/* social icons */}
            <h4 className="p-3 text-purple-900"> Social Media </h4>
            <div className="flex justify-around w-9/12 text-purple-900 max-auto my-5max md:w-full">

                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <BsInstagram className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* address */}
            <div className="mt-3 space-x-2 bg-gray-200" style={{marginLeft:"-1rem", marginRight:"-1rem"}} >
                
                    
            
                <p className="pt-3 mt-3">Contatos</p>
                <a href='  mailto:zcueto58@gmail.com' className="flex items-center justify-center px-2 py-1 my-3" >
                    <AiTwotoneMail className='w-6 mr-4 text-purple-900 h-9' />
             Contato por  E-mail
                </a>
                <a href="https://wa.me/5511975692007 " className="flex items-center justify-center pb-4">
                    <IoLogoWhatsapp className='w-6 h-6 mr-3 text-green-500 mmr-4' />
                    Contato por  Whatsapp
                </a>
            </div>
          

        </div>
    )
}
