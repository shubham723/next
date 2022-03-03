import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../assets/Images/banner.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
};

export default Banner;
