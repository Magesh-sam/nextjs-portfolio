"use client";

import { motion } from "framer-motion";

function page() {
  return (
    <main className="  mx-auto  flex max-w-5xl flex-col  gap-y-6    pt-10">
      <div className="flex h-20 w-full  items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="  text-3xl font-bold "
        >
          Projects
        </motion.h1>
      </div>
    </main>
  );
}

export default page;
