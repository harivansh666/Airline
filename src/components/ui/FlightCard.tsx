function FlightCard() {
  return (
    <div className="relative p-1">
      <div className="flex items-center justify-evenly max-w-[420px] gap-1.5 rounded-md bg-gray-100  p-2 m-1 overflow-hidden">
        <div className="relative bg-orange-500 w-10">
          <img
            src="https://flights.ticketstoindia.co.uk/airlogo/AI.png"
            alt="img"
            className="rounded-sm w-full"
          />
        </div>
        <div className="flex items-center gap-4 ">
          <div className="flex flex-col">
            <div>07:15</div>
            <div>LHR</div>
          </div>
          {/* doted */}
          <div className="flex  text-xs flex-col gap-1.5 justify-center items-center">
            <p>9h 05</p>
            <div className="border-t-3 border-dotted   w-30  my-1 border-gray-400"></div>

            <p className="text-green-500 -tracking-tighter">Direct</p>
          </div>
          <div className="flex flex-col">
            <div>07:15</div>
            <div>LHR</div>
          </div>
        </div>
        <div className="flex justify-center w-30 h-full ">
          <div className="text-2xl font-black text-blue-600 border-l-2 border-gray-300 p-2 ">
            £300
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
