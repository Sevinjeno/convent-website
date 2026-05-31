import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HomePage from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pushpasadan",
  description:
    "Explore Carmel Oasis at Pushpasadan Old Age Home in Wanjale, Raigad, a peaceful convent-led elder care home shaped by dignity, companionship, prayer, and daily support.",
  openGraph: {
    title: "Carmel Oasis | Pushpasadan Old Age Home",
    description:
      "A peaceful old age home where senior residents are cared for with dignity, prayer, companionship, and love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmel Oasis | Pushpasadan Old Age Home",
    description:
      "Convent-led residential elder care with daily support, companionship, and a prayerful atmosphere.",
  },
};

const elderlyCareStructuredData = {
  "@context": "https://schema.org",
  "@type": "ElderlyCare",
  name: "Carmel Oasis at Pushpasadan Old Age Home",
  alternateName: "Pushpasadan Old Age Home",
  telephone: "+91 8766480884",
  description:
    "A convent-led elder care home offering peaceful residential support, daily care, companionship, prayer, and dignity for senior residents.",
  serviceType: "Residential elder care",
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carmel Oasis, Wanjale",
    addressRegion: "Raigad",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 8766480884",
    contactType: "resident care enquiries",
    name: "Sr. Anishya",
  },
  image: [
    "/photos/carmel-oasis-exterior.jpg",
    "/photos/sisters-front.jpg",
    "/photos/community-team.jpg",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of care does Pushpasadan Old Age Home provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pushpasadan provides residential elder care in a convent-led setting, with daily support, meals, companionship, prayerful presence, and a peaceful environment for senior residents.",
      },
    },
    {
      "@type": "Question",
      name: "Is the home suitable for elders who need companionship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The home is shaped around belonging, shared routines, visits, prayer, and community life so elders are not left to feel alone.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(elderlyCareStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
