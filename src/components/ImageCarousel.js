import { 
    Carousel as ShadcnCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from './ui/carousel';
import Image from 'next/image';

const ImageCarousel = ({ images, caption }) => {
    return (
        <div className="carousel-container relative rounded-lg border border-gray-300 overflow-hidden shadow-lg">
            <ShadcnCarousel>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="relative">
                            <Image src={image.src} alt={image.alt} width={500} height={500} className="object-cover"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"/>
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"/>
            </ShadcnCarousel>
            {caption && <div className="caption p-2 text-center text-lg">{caption}</div>}
        </div>
    );
};

export default ImageCarousel;