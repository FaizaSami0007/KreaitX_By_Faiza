import type { Metadata } from "next";
import { WorkClient } from "@/components/sections/WorkClient";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description: "Explore real projects and verified business impact delivered by KreaitX across Healthcare, Luxury Retail, and Financial Technology."
};

export default function WorkPage() {
  return <WorkClient />;
}

