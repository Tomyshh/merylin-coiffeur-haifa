import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { JsonLd } from "@/components/json-ld";
import { ServicesSection } from "@/components/services-section";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} dict={dict} />
      <Header locale={locale} brand={dict.brand} nav={dict.nav} />
      <main>
        <HeroSection dict={dict} locale={locale} />
        <ServicesSection dict={dict} />
        <GallerySection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppFab label={dict.whatsappFab} />
    </>
  );
}
