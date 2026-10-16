import type { Metadata } from "next";
import { ContactClient } from "@/components/sections/ContactClient";

export const metadata: Metadata = {
  title: "Start a Conversation — Contact KreaitX",
  description: "Discuss your upcoming brand, cinematic production, or digital engineering initiative with the senior team at KreaitX in Peshawar, Pakistan."
};

export default function ContactPage() {
  return <ContactClient />;
}

