import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

interface AosProps{
    children?: React.ReactNode
    aosType?: string
    aosEasing?: string
    aosOffset?: number
    aosDuration?: number | undefined
    className?:string
}

const AosDiv = ({ children,className, aosType, aosEasing, aosOffset, aosDuration, ...props }:AosProps) => {
    React.useEffect(() => {
        AOS.init({duration:3000});
      }, []);
    
      return (
        <div data-aos={aosType} data-aos-easing={aosEasing} data-aos-offset={aosOffset} data-aos-duration={aosDuration} className={className} {...props}>
          {children}
        </div>
      );
    }

export default AosDiv