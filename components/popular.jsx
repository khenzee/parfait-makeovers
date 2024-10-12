'use client';
import { useState, useEffect } from 'react';
import ServiceCard from "@/components/serviceCard/ServiceCard";
import GlobalApi from '@/app/_testimony/GlobalApi';

const Popular = () => {
  const [popularList, setPopularList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServiceList = async () => {
    const data = await GlobalApi.getPopularService();
    const response = data.services
    setPopularList(response)
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div className="p-6 md:px-0 smallgrid grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {popularList.length > 0 ? (
        popularList.map((service) => (
          <div className="service-card" key={service.id}>
            <ServiceCard
             image={service.image.url}
             title={service.title}
             body={service.brief}
             link={service.info} // Use "brief" or "info" field from your API response
            />
          </div>
        ))
      ) : (
        <p>No popular services available</p>
      )}
    </div>
  );
}

export default Popular;
