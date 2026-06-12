import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { techIcons } from '../data/projects';
import 'swiper/css';
import { motion } from 'framer-motion';

const HIDDEN_FROM_CAROUSEL = new Set(['default', 'BullMQ', 'Puppeteer']);

const TechCarousel = () => {
  const icons = Object.entries(techIcons).filter(([name]) => !HIDDEN_FROM_CAROUSEL.has(name));

  return (
    <section className="py-8 sm:py-12 bg-cream-dim/20 dark:bg-ink-soft/70 backdrop-blur-sm border-y border-wine/15 dark:border-cream-dim/10 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
            1280: {
              slidesPerView: 9,
            },
          }}
          className="w-full linear-swiper"
        >
          {icons.map(([name, icon], index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center group select-none h-full w-full">
                <div className="flex items-center justify-center h-16 w-16 mb-2 text-ink/50 dark:text-cream-dim/60 group-hover:text-wine dark:group-hover:text-cream transition-colors duration-300 transform group-hover:scale-110">
                  {React.cloneElement(icon, { size: 40 })}
                </div>
                <p className="text-sm text-center text-ink/50 dark:text-cream-dim/60 group-hover:text-wine dark:group-hover:text-cream transition-colors font-medium tracking-wide">
                  {name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TechCarousel;
