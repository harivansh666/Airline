import React from "react";

const PaymentMethods: React.FC = () => {
  const paymentMethods = [
    {
      name: "VISA",
      icon: "VISA",
      color: "from-blue-900 to-blue-600",
      textColor: "text-blue-900",
    },
    {
      name: "MasterCard",
      icon: "MasterCard",
      color: "from-red-600 to-orange-500",
      textColor: "text-red-700",
    },
    {
      name: "Maestro",
      icon: "Maestro",
      color: "from-green-700 to-green-500",
      textColor: "text-green-700",
    },
    {
      name: "JCB",
      icon: "JCB",
      color: "from-purple-700 to-purple-500",
      textColor: "text-purple-700",
    },
  ];

  return (
    <section className="w-full py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Accepted Payment Methods
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We accept all major payment cards for your convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background gradient effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Payment method logo */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div
                  className={`text-2xl md:text-3xl font-black tracking-tight ${method.textColor} mb-3`}
                >
                  {method.icon}
                </div>

                {/* Payment method name */}
                <h3 className={`text-lg font-semibold ${method.textColor}`}>
                  {method.name}
                </h3>

                {/* Decorative line */}
                <div
                  className={`w-12 h-1 bg-gradient-to-r ${method.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only note */}
        <div className="mt-8 text-center md:hidden">
          <p className="text-sm text-gray-500">
            Tap on any card for more details
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            All transactions are secure and encrypted
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
