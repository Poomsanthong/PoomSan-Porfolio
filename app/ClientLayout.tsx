"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/NavBar";
const DESIGN_MODE = false;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  if (DESIGN_MODE) {
    return (
      <Loader
        onFinish={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  }

  console.log(loaded);

  return (
    <>
      <Navbar loaded={loaded} />

      {/* PAGE CONTENT */}

      {children}
      <AnimatePresence>
        {!loaded && (
          <Loader key="intro-loader" onFinish={() => setLoaded(true)} />
        )}
      </AnimatePresence>
    </>
  );
}
