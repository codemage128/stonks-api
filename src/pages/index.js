import Head from "next/head";
import Link from "next/link";
import Upcomming from "../pages/upcoming";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Link href="/about">Upcoming Events</Link>
      </div>
    </div>
  );
}
