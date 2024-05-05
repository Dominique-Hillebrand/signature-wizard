import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 py-16">
      <div className="bg-white p-28 rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-bold pb-4">Sign Easy</h1>
        <p className="text-lg pb-8">Sign PDFs with ease</p>
        <Link href="/DigitalSignature">
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            variant="contained"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </main>
  );
}
