
const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.293 10.293a1 1 0 011.414 0L14 13.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0L9.707 11.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4 10a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your payment. Your transaction was completed successfully.
        </p>
        <div className="space-y-4">
         
          <button
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={() => window.location.href = '/'}
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
