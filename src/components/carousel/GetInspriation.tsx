import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

function GetInspriation() {
  const destinations = [
    {
      name: "Zhuhai",
      imageUrl:
        "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1280bp/public/live_banner/Zhuhai.jpg",
    },
    {
      name: "Paris",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Arc_de_Triomphe_HDR_2007.jpg/330px-Arc_de_Triomphe_HDR_2007.jpg",
    },
    {
      name: "Mumbai",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bandra_Worli_Sea-Link_%28cropped%29.jpg/500px-Bandra_Worli_Sea-Link_%28cropped%29.jpg",
    },
    {
      name: "Da Nang",
      imageUrl:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/48/2024/08/16031252/Ba-Na-Hills-Da-Nang.png",
    },
    {
      name: "Moscow",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/500px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
    },
    {
      name: "Amritsar",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSr1QEAl5K0kMI3dq5hyN6IYhGX_fuUL-uCmZMrVcsog&s",
    },
  ];

  return (
    <div className=" hidden sm:block mb-14">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full"
      >
        <CarouselContent className="">
          {destinations.map((destination, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 md:basis-1/3 lg:basis-1/5 "
            >
              <Card className="overflow-hidden h-30  rounded-md shadow-md border-0  relative ">
                <div className="relative w-full h-full bg-amber-200 ">
                  <LazyLoadImage
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="absolute object-cover scale-120  inset-0 w-full h-full "
                  />
                </div>

                <CardContent className="p-4 absolute bottom-0">
                  <h3 className=" font-black tracking-wider text-white text-lg truncate">
                    {destination.name}
                  </h3>

                  {/* <p className="text-xl font-bold mt-2">{destination}</p> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default React.memo(GetInspriation);
