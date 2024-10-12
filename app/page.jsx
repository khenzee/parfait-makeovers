'use client'
import Popular from "@/components/popular";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import Testimonial from "@/components/testimonial/testimonial";
import Image from "next/image";
import Link from "next/link";
import { Animation } from "./animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {

  useGSAP(()=>{
    gsap.to('.hero', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3
    })
    gsap.to('.imag',{
      x: 0,
      opacity: 1,
      duration: 1,
      
    })
  }, [])

  return (
    <main className="md:px-10 lg:px-[100px] relative">
      <div className="px-8 py-3 md:py-10 flex flex-col md:flex-row gap-3 md:gap-10">
       <div className="md:flex md:flex-col md:w-[50%] md:justify-center md:gap-[50px]">
        <div className="relative">
          <h1 className="z-1 w-[300px] translate-y-3 opacity-0 hero mb-4">
              PARFAIT. MAKEOVER
          </h1>
          <p className="z-1 relative block w-[100%] hero translate-y-3 opacity-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iste totam. Odio, 
                quidem quos sit assumenda accusamus ad. Quia, expedita.
          </p>
        </div>
        <button className="hero translate-y-3 opacity-0 py-4 hidden md:block md:w-full text-primary-foreground bg-primary">
            Book An Appointment</button>
       </div>
       
          <div className=" w-full md:w-[50%] h-[400px] md:h-[350px] lg:h-[450px]
           object-cover overflow-hidden">
            <div className="imag relative -translate-x-60 opacity-0">
            <Image src='/makup.jpg' width={700} height={700}/>
            </div>
          </div>
        <button className="py-4 md:hidden translate-y-3 opacity-0 hero text-primary-foreground bg-primary">
          Book An Appointment
        </button>
      </div>
      <Testimonial/>
      <div className="p-2"> 
        <h3 className="font-medium text-[32px] text-center text-primary px-5">Our Popular Services</h3>
        <div className="p-6 flex flex-col gap-4 ">
          <Popular/>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium ea rem ut soluta animi 
            expedita, voluptatem consectetur asperiores dolore!
            <span className=" px-4 font-bold underline"> <Link href='/services'>see more services</Link></span>
          </p>
         
        </div>
      </div>
    </main>
  );
}
