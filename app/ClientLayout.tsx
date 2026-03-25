"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/NavBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

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
