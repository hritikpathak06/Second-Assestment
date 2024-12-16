
const Cancel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
                <div className="flex justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M14.293 5.707a1 1 0 010 1.414L10.414 10l3.879 3.879a1 1 0 01-1.414 1.414L9 11.414l-3.879 3.879a1 1 0 11-1.414-1.414L7.586 10 3.707 6.121a1 1 0 011.414-1.414L9 8.586l3.879-3.879a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold text-center text-red-600 mb-4">
                    Payment Failed!
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Unfortunately, your payment could not be processed. Please try again.
                </p>
                <div className="space-y-4">

                    <button
                        className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                        onClick={() => window.location.href = '/'}
                    >
                        Go Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
