"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import type { Locale } from "@/lib/i18n";

export function LocaleHtmlAttributes() {
  const params = useParams();
  const locale = params.locale as Locale;

  useEffect(() => {
    if (!locale) return;
    const resolved = locale === "en" ? "en" : "he";
    document.documentElement.lang = resolved;
    document.documentElement.dir = resolved === "he" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
