"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {

    // useRef is used to reference the image element to be animated
    const imageRef = useRef();

    useEffect(() => {
        // Get a reference to the DOM element using the ref (imageRef)
        const imageElement = imageRef.current;
    
        // Define a function that handles scroll events
        const handleScroll = () => {
            // Get the current vertical scroll position of the window
            const scrollPosition = window.scrollY;
    
            // Set a threshold value for triggering the effect
            const scrollThreshold = 100;
    
            // If the scroll position is greater than the threshold, add the "scrolled" class
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } 
            // If the scroll position is less than or equal to the threshold, remove the "scrolled" class
            else {
                imageElement.classList.remove("scrolled");
            }
        };
    
        // Add the scroll event listener to the window, triggering handleScroll on scroll
        window.addEventListener("scroll", handleScroll);
    
        // Clean-up function to remove the scroll event listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty dependency array ensures this effect runs only once after the initial render
    

    


  return (
    <div className='pb-20 px-4'>
        <div className='container mx-auto text-center'>

        
      <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
        Manage your finances <br/> with Intelligence
      </h1>

      <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto '>
        An AI powered financial management tool that helps you track, analyze ,and optimize yopur spending with real-time insights.
      </p>


      <div className='flex justify-center space-x-4'>
        <Link href = "/dashboard">
            <Button size="lg" className = "px-8">Get Started

            </Button>
        </Link>

        <Link href = "https://www.youtube.com/roadsidecoder">
        <Button size="lg" variant = "outline" className = "px-8">Watch Demo</Button>
        </Link>
      </div>


      {/* hero image wrapper is a custom class to style the image for animation upon scrolling */}
      <div className='hero-image-wrapper'>
        <div ref = {imageRef} className='hero-image'>
            <Image
                src= "/banner.jpeg"
                alt = "Dashboard Preview"
                width={1280}
                height={720}
                className='rounded-lg shadow-2xl border mx-auto'
                priority

            />

        </div>
      </div>
     
    </div>
    </div>
  )
}

export default HeroSection
