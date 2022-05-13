import Head from "next/head";
import Upcomming from "../pages/upcoming";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <a
          href="/upcoming"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Upcoming Events
        </a>
      </div>
    </div>
  );
}
