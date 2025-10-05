import { 
    Carousel as ShadcnCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from './ui/carousel';
import Image from 'next/image';

const ImageCarousel = ({ images, caption }) => {
    const showControls = images.length > 1;

    return (
        <div className="carousel-container relative rounded-xl border border-white/20 bg-white/90 backdrop-blur-lg overflow-hidden shadow-2xl">
            <ShadcnCarousel>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="relative">
                            <Image 
                                src={image.src} 
                                alt={image.alt} 
                                width={500} 
                                height={500} 
                                className="object-cover"
                                priority={index === 0}
                                loading={index === 0 ? undefined : "eager"}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {showControls && (
                    <>
                        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"/>
                        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"/>
                    </>
                )}
            </ShadcnCarousel>
            {caption && (
                <div className="caption p-3 text-center text-sm font-semibold text-slate-900 bg-blue-50/90">
                    {caption}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
