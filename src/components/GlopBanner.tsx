import { useStore } from "@/store/statesStore";
import { Globe } from "./ui/globe";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "./ui/skeleton";
import Quotes from "./ui/Quotes";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function GlopBanner() {
  const { isLoding } = useStore();
  return (
    <>
      {isLoding ? (
        <Skeleton className="max-w-[400px] h-60 bg-gray-200 rounded-2xl mt-4" />
      ) : (
        <div className="flex flex-col sm:flex-row p-2 gap-2 ">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="max-w-s   "
          >
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem key={index} className=" overflow-hidden">
                  <div className="flex  justify-center items-center h-60 rounded-2xl p-4 bg-blue-700  object-cover  ">
                    <div>
                      <h2 className="font-semibold text-2xl text-nowrap text-white">
                        Our Agents
                      </h2>
                      <h3 className="text-gray-300">
                        London, Jalandhar, Delhi
                      </h3>
                    </div>
                    <Globe className="w-full h-full p-2" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Quotes />
        </div>
      )}
    </>
  );
}

export default GlopBanner;
