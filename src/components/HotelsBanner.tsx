import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";

const hotels = [
  {
    name: "Bloomrooms @ Link Road",
    location: "Jangpura Extension",
    stars: 3,
    rating: 8.3,
    reviewText: "Excellent",
    reviews: "699 Users",
    price: "£7,359",
    badge: "Best Price Guarantee",
    discount: null,
    imageUrl:
      "https://images.trvl-media.com/lodging/6000000/5300000/5290700/5290649/42f5d86e.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
  },
  {
    name: "Treebo Corporate Park",
    location: "Greater Kailash",
    stars: 3,
    rating: 6.3,
    reviewText: "Good",
    reviews: "22 Users",
    price: "£2,617",
    badge: null,
    discount: "70% off",
    imageUrl: "https://gos3.ibcdn.com/c07b3272eeff11ed839f0a58a9feac02.jpg",
  },
  {
    name: "Hotel Pearl",
    location: "Mahipalpur",
    stars: 3,
    rating: 8.3,
    reviewText: "Excellent",
    reviews: "21+ Users",
    price: "£3,522",
    badge: null,
    discount: null,
    imageUrl:
      "https://images.trvl-media.com/lodging/37000000/36200000/36196900/36196897/7067b17f.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  },
  {
    name: "Super Townhouse Chhatarpur",
    location: "Chhatarpur",
    stars: 4,
    rating: 7.2,
    reviewText: "Very Good",
    reviews: "128 Users",
    price: "£776",
    badge: null,
    discount: "48% off",
    imageUrl: "https://gos3.ibcdn.com/9fccb112-2211-411f-8a61-c45206c078f2.jpg",
  },
  {
    name: "Le Meridien New Delhi",
    location: "Connaught Place",
    stars: 5,
    rating: 8.5,
    reviewText: "Excellent",
    reviews: "478 Users",
    price: "£20,000+",
    badge: "Best Price Guarantee",
    discount: null,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/74/91/95/le-meridien-new-delhi.jpg?w=700&h=-1&s=1",
  },
];

function HotelsBanner() {
  return (
    <div className="border-1 shadow-xl rounded-3xl p-6 mt-10 bg-gradient-to-r from-orange-200">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Top Hotels in New Delhi
          </h2>
          <p className="text-sm text-gray-600 pt-1">Best Price Guarantee</p>
        </div>
        <button className="text-green-700 font-medium hover:underline">
          View all ›
        </button>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {hotels.map((hotel, index) => (
            <CarouselItem
              key={index}
              className="pl-6 basis-1/1 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden w-76 rounded-2xl shadow-md border-0 mb-2 ">
                <div className="relative">
                  <Link
                    to={"https://www.ticketstoindia.co.uk/worldwide-hotels/"}
                  >
                    <LazyLoadImage
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-48 object-cover rounded-b-xl"
                    />
                    {hotel.discount && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {hotel.discount}
                      </div>
                    )}
                    {hotel.badge && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2l3.09 6.26L20 9.27l-5 4.87 1.18 6.88L10 17.77l-6.18 3.25L5 14.14l-5-4.87 6.91-1.01L10 2z" />
                        </svg>
                        {hotel.badge}
                      </div>
                    )}
                  </Link>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg truncate">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    {hotel.location}
                  </p>
                  <div className="flex items-center gap-1 my-1">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                      {hotel.rating}
                    </span>
                    <div className="flex gap-1.5 ">
                      <span className="font-medium text-sm">
                        {hotel.reviewText}
                      </span>
                      <p className="text-xs text-gray-500">{hotel.reviews}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold mt-2">{hotel.price}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-[-8px]" />
      </Carousel>
    </div>
  );
}

export default HotelsBanner;
