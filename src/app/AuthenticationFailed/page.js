import Link from "next/link";

export default function AuthenticationFailed() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a5 5 0 1110 0 1 1 0 002 0 7 7 0 11-9.192-6.716A6.97 6.97 0 015 10zm7-3a1 1 0 11-2 0 1 1 0 012 0zm-2 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        Authentication failed
      </h1>
      <p className="text-gray-600 mt-2">
        Please check your credentials and try again.
      </p>
      <Link href="/DigitalSignature">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Try Again
        </button>
      </Link>
    </div>
  );
}
