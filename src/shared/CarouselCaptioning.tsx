//Captioning for carousel, depending on if on mobile of desktop webpage 

import { Carousel } from "react-bootstrap";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {
    children: React.ReactNode;
    isHovered: boolean;
}

const CarouselCaptioning = ({children, isHovered}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); //bool to see is it mobile or web

  return ( 
        isAboveMediumScreens ? (
           //md+
           isHovered && (<Carousel.Caption>
                  {children}
                </Carousel.Caption>)
          ) : (
            //mobile screens, add a bg to the caption 
            <div className='m-auto'>
                {isHovered && (<Carousel.Caption className='bg-white bg-opacity-75 text-black text-bold'>
                  {children}
                </Carousel.Caption>)}
            </div>
          )
          )
}

export default CarouselCaptioning