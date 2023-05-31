"use client";

import BookmarkIcon from "@heroicons/react/24/solid/BookmarkIcon";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroQuote() {
  return (
    <motion.div
      layout
      className={`relative flex flex-col items-center justify-center gap-5 rounded-md bg-cover text-slate-900 shadow-md md:col-span-2 lg:col-span-2`}
    >
      <Image
        src="/images/bron.jpg"
        className="absolute left-0 top-0 h-full w-full rounded-md bg-cover object-cover opacity-30"
        alt="main photo"
        width={300}
        height={300}
      />
      <motion.div
        className="relative z-10 flex flex-col gap-3 bg-slate-600 text-orange-200 opacity-80"
        layout
      >
        <motion.div className="p-4">
          <BookmarkIcon className="absolute -top-3 w-8 text-slate-900" />
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="bold px-6 text-xl italic"
          >
            It’s not whether you get knocked down; it’s whether you get up.
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ delay: 0.5 }}
            className="self-end px-6 text-center italic"
          >
            -Vince Lombardi
          </motion.section>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
