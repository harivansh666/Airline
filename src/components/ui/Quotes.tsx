import { motion } from "framer-motion";

function Quotes() {
  return (
    <>
      <div className="flex  flex-col-reverse rounded-2xl h-60  items-center justify-center p-2 ">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center font-[Poppins-regular] uppercase px-2 sm:px-0">
          The world is a book, and those who do not{" "}
          <span className="underline font-[Poppins-ExtraBold] underline-offset-2 sm:underline-offset-4 decoration-emerald-500">
            travel
          </span>{" "}
          read only one page.
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ right: 4 }}
          className="w-20 h-20 bg-amber-100"
        ></motion.div>
      </div>
    </>
  );
}

export default Quotes;
