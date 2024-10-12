'use client';
import { useState, useEffect } from 'react';
import ServiceCard from "@/components/serviceCard/ServiceCard";
import GlobalApi from '@/app/_testimony/GlobalApi';

const Services = () => {

  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServiceList = async () => {
    try {
      // Fetch testimonials from the API
      const response = await GlobalApi.getServices();
      const fetchedServices = response.services;

      // Store fetched testimonials in localStorage
      localStorage.setItem('services', JSON.stringify(fetchedServices));

      // Update state with fetched testimonials
      setServicesList(fetchedServices);
    } catch (error) {
      console.error('Error fetching services:', error);

      // If API fetch fails, retrieve testimonials from localStorage
      const cachedServices = localStorage.getItem('services');
      if (cachedServices) {
        setServicesList(JSON.parse(cachedServices));
      }
    } finally {
      // Stop loading
      setLoading(false); 
    }
}
  useEffect(() => {
    getServiceList();
  }, []);
 

  return (
    <div className='px-8 lg:px-[8rem] md:px-[4.2rem] '>
      <div>
        <h1>Our Services</h1>
      </div>

      <div className="py-6  smallgrid grid md:grid-cols-2
       lg:grid-cols-3 gap-4 ">
            {servicesList.length > 0 && servicesList.map((service) =>(
              <div className="" key={service.id}>
                <ServiceCard
                  image={service.image.url}
                  title={service.title}
                  body={service.brief}
                  link={service.info}
                />
              </div>
            ))}
          </div>
    </div>
  )
}

export default Services;