'use client'
import { useState, useEffect } from 'react';

// Adjust this import to your API file
import GlobalApi from '@/app/_testimony/GlobalApi'; 
import Image from 'next/image';
import {ContactButton, SectContactButton} from '@/components/contactBtn';
import Link from 'next/link';

const ServiceDetail = ({params}) => {

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTheService=async()=>{
    GlobalApi.getService(params.service).then(resp=>{
      setService(resp.service)
    });
  
  }

  useEffect(() => {
    params && getTheService()
  }, [params]);



  return (
    <div className='md:flex lg:px-[8rem] md:px-[4.5rem] md:py-10 '>
       <div className='aspect-square hidden md:block md:flex-1 overflow-hidden'>
        <Image src={service.image?.url} 
          width={500} height={500}/>
      </div>

      <div className='px-8 py-4 flex flex-col md:my-auto gap-3 md:flex-1'>
      <h1>{service.title}</h1>
      <p>{service.brief}</p>
     <div className='aspect-square md:hidden overflow-hidden'>
      <Image src={service.image?.url} 
        width={500} height={500}/>
     </div>
     <div className='border-2 p-2'>   
      <div className='flex'>
          <div className='flex-1'>
            <p className='font-bold'>Duration</p>
            <p>{service.duration}</p>
          </div>

          <div className='flex-1'>
            <p className='font-bold'>Price</p>
            <p>{service.price}</p>
          </div>
      </div>
        <div> 
        <div className="w-full text-primary-foreground mx-auto mt-4 bg-primary inline-block">
            <SectContactButton
            title= 'Book An Appointment'
          />
          </div>
        </div>
     </div>
      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium ea rem ut soluta animi 
              expedita, voluptatem consectetur asperiores dolore!
              <span className=" px-4 font-bold underline"> <Link href='/services'>check other services</Link></span>
            </p>
    </div>
    </div>
  );
};

export default ServiceDetail;
