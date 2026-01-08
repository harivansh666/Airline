import { motion } from "framer-motion";

function Quotes() {
  return (
    <>
      <div className="flex  flex-col-reverse rounded-2xl h-60 items-center justify-center overflow-hidden p-2 border-2">
        <div className="w-full flex">
          <motion.img
            src="https://res.cloudinary.com/desslvu1w/image/upload/f_webp,q_auto,f_auto/v1767863610/loding_ehdmkh.png"
            initial={{ x: -100 }}
            animate={{ x: 800 }}
            transition={{ duration: 5, repeat: 3, ease: "easeIn" }}
            className="w-12 h-full flex justify-start   overflow-hidden "
            loading="lazy"
          ></motion.img>
        </div>
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center font-[Poppins-regular] uppercase px-2 sm:px-0 text-gray-700">
          The world is a book, and those who do not{" "}
          <span className="underline font-[Poppins-ExtraBold] underline-offset-2 sm:underline-offset-4 decoration-emerald-500">
            travel
          </span>{" "}
          read only one page.
        </h1>
      </div>
    </>
  );
}

export default Quotes;
