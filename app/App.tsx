import HeroQuote from "@/components/HeroQuote";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import Image from "next/image";
export default function App() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md md:col-span-2 lg:col-span-2`}
      />
      <HeroQuote />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
      <div
        className={`flex items-center justify-center rounded-md bg-slate-900 bg-cover text-orange-200 shadow-md`}
      />
    </div>
  );
}
