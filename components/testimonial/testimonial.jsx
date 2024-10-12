'use client';
import { useState, useEffect } from 'react';
import styles from './testimonial.module.css'; // Ensure you have appropriate styles defined
import GlobalApi from '@/app/_testimony/GlobalApi';

const Testimonial = () => {
  const [testimonyList, setTestimonyList] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(true);

  const getTestimonyList = async () => {
    try {
      // Fetch testimonials from the API
      const response = await GlobalApi.getTestimony();
      const fetchedTestimonials = response.testimonials;

      // Store fetched testimonials in localStorage
      localStorage.setItem('testimonials', JSON.stringify(fetchedTestimonials));

      // Update state with fetched testimonials
      setTestimonyList(fetchedTestimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);

      // If API fetch fails, retrieve testimonials from localStorage
      const cachedTestimonials = localStorage.getItem('testimonials');
      if (cachedTestimonials) {
        setTestimonyList(JSON.parse(cachedTestimonials));
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getTestimonyList();
  }, []);

  useEffect(() => {
    if (testimonyList.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonyList.length);
      }, 4000); // Change testimonial every 4 seconds

      return () => clearInterval(interval); // Clear interval on unmount
    }
  }, [testimonyList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="border-2 lg:flex">
        <div className="lg:w-[40%]">
          <h2 className="w-[300px] text-[32px] p-4">What our Clients Say About Us.</h2>
        </div>
        <hr className="border-[1px] lg:hidden" />
        <div className="p-2">
          {testimonyList.length > 0 && (
            <div className={styles.testimonial}>
              <p className={styles.quote}>
                {testimonyList[currentTestimonial].testimony}
              </p>
              <p className={`${styles.author} text-right block`}>
                {testimonyList[currentTestimonial].name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
