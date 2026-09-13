const steps = [
  {
    number: "1",
    title: "Report",
    description: "Tell us what you lost or found with simple details.",
  },
  {
    number: "2",
    title: "Match",
    description: "Our system helps find possible matches.",
  },
  {
    number: "3",
    title: "Reconnect",
    description: "Verify ownership and get back what matters.",
  },
];

export default function HowFindlyWorks() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <h2 className="mb-7 text-2xl font-bold text-gray-900">
          How Findly Works
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row md:items-start">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-1 md:flex-row md:items-start"
            >
              {/* Step */}
              <div className="flex items-start gap-3">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-md font-bold text-white sm:h-9 sm:w-9">
                  {step.number}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 sm:text-md">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-md text-gray-500 sm:text-md">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile connector */}
                  <div className="ml-4 flex h-10 items-center md:hidden">
                    
                    <span className="ml-[-3px] text-xl text-blue-600">
                      ↓
                    </span>
                  </div>

                  {/* Desktop connector */}
                  <div className="mx-4 mt-4 hidden flex-1 items-center md:flex lg:mx-6">
                    
                    <span className="ml-1 text-3xl text-blue-600">
                      →
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}