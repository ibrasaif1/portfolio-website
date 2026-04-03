import {
    Carousel as ShadcnCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';

const ImageCarousel = ({ images, caption, setApi }) => {
    const showControls = images.length > 1;

    return (
        <div className="carousel-container relative rounded-xl border border-brand-navy/30 bg-white/90 backdrop-blur-lg shadow-2xl flex flex-col h-full">
            <div className="flex-1 min-h-0 overflow-hidden relative">
                <ShadcnCarousel setApi={setApi}>
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                    priority={index === 0}
                                    loading={index === 0 ? undefined : "eager"}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {showControls && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"/>
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"/>
                        </>
                    )}
                </ShadcnCarousel>
            </div>
            {caption && (
                <div className="caption shrink-0 p-2 text-center text-xs font-semibold text-brand-dark bg-brand-navy/10">
                    {caption}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
