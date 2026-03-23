"use client";

import { useState } from "react";
import Loader from "@/components/Loader";

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

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && children}
    </>
  );
}
