import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function Info() {
  return (
    <div className=" p-3">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-4 sm:mb-4">
          <h1 className="text-2xl sm:text-2xl font-medium text-gray-800 mb-2">
            Explore India
          </h1>


          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"></div>
        </div>

        {/* Accordion Section */}
        <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="font-semibold text-lg sm:text-xl text-gray-800 hover:text-gray-900 hover:no-underline px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center mr-3">
                    <span className="text-amber-600 font-bold">✈️</span>
                  </div>
                  <span>Flight Tickets to India</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-4 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="space-y-4">
                  {/* Introduction */}
                  <p className="text-gray-700 leading-relaxed text-justify">
                    <span className="font-bold text-gray-800">
                      Elemental and vibrant!
                    </span>
                    These words perfectly capture India—a land where everything
                    converges. From ancient invasions to magnificent Maharajas,
                    from enlightened saints to mystical enchanters, and the
                    glorious myths of Gods with over 1000 scriptures written
                    about them. The beauty unfolds in endlessly wonderful ways.
                  </p>

                  {/* Cultural Diversity */}
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-4 border-l-4 border-blue-600">
                    <h3 className="font-bold text-white mb-2">
                      Cultural Tapestry
                    </h3>
                    <p className="text-white">
                      As the world's largest democracy, India boasts exotic
                      architecture, diverse religions, languages, and
                      breathtaking landscapes—from majestic mountain ranges to
                      lush forests, endless deserts, and pristine beaches.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="mr-2">🏛️</span>
                        Iconic Wonders
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Immerse yourself in{" "}
                        <span className="font-bold text-gray-800">
                          'Eternal Love'
                        </span>
                        at India's treasured{" "}
                        <span className="font-bold text-gray-800">
                          Taj Mahal
                        </span>
                        , one of the Seven Wonders of the World.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="text-gray-800 mr-2">🏖️</span>
                        Natural Beauty
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Experience Goa's sparkling beaches or Kerala's
                        palm-fringed shores, undulating hills, and serene
                        backwaters.
                      </p>
                    </div>
                  </div>

                  {/* Economic Power */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-gray-800 mb-3">
                      Global Economic Power
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Home to corporate giants like{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        Tatas
                      </span>
                      ,{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        Wipro
                      </span>
                      ,{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200to-transparent px-1">
                        Infosys
                      </span>
                      ,{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        Mahindras
                      </span>
                      ,{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        Birlas
                      </span>
                      ,{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        Reliance
                      </span>
                      , and{" "}
                      <span className="font-bold bg-gradient-to-r from-blue-200 to-transparent px-1">
                        United Breweries
                      </span>
                      .
                    </p>
                    <p className="text-gray-700">
                      As one of the world's largest economies, India seamlessly
                      blends tradition with innovation, boasting the highest
                      numbers of IT professionals, doctors, scientists,
                      researchers, and Nobel laureates.
                    </p>
                  </div>

                  {/* I  n  d  i  a  */}
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl p-5 text-white">
                    <h3 className="font-bold text-lg mb-3 text-center">
                      The Spirit of India
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                      {[
                        "Incredible",
                        "Novel",
                        "Distinct",
                        "Iconic",
                        "Alluring",
                      ].map((word, index) => (
                        <div
                          key={index}
                          className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
                        >
                          <div className="text-2xl font-bold text-amber-200">
                            {word[0]}
                          </div>
                          <div className="text-sm font-medium mt-1">{word}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call wala  */}
                  <div className="text-center border-t pt-6">
                    <p className="text-gray-700 mb-4">
                      Put a 'spring' in your step and a 'smile' on your face
                      with our fabulous offers to rediscover India.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Visit our website for affordable airfares and memorable
                        tour packages:
                      </p>
                      <a
                        href="https://www.ticketstoindia.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-bold text-blue-700 hover:text-blue-500 transition-colors duration-200"
                      >
                        www.ticketstoindia.co.uk
                      </a>
                      <p className="text-sm text-gray-600 mt-2">
                        Or email our customer support:
                      </p>
                      <a
                        href="mailto:cc@ticketstoindia.co.uk"
                        className="inline-block font-bold text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        cc@ticketstoindia.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Info;
