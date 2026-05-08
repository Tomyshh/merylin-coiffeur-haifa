"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { SITE_WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFab({ label }: { label: string }) {
  return (
    <Link
      href={SITE_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-[1.05] hover:bg-[#20bd5a] md:h-[3.75rem] md:w-[3.75rem] rtl:left-auto rtl:right-6"
      aria-label={label}
      title={label}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </Link>
  );
}
