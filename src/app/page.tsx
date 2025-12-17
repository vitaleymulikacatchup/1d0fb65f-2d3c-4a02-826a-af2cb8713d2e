"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Utensils, ChefHat, Star, Mail, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="aurora"
      cardStyle="elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963652829-rkf3ytdb.jpg"
          logoAlt="Bobo Restaurant"
          brandName="Bobo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Welcome to Bobo"
          description="Experience culinary excellence in an atmosphere of refined elegance. Where tradition meets innovation on every plate."
          tag="Fine Dining"
          tagIcon={Utensils}
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963653747-d4hj5176.jpg",
              imageAlt: "Gourmet plated dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963654860-6qczeoti.jpg",
              imageAlt: "Fine dining presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963656183-qj61ygxe.jpg",
              imageAlt: "Restaurant ambiance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963657371-x3q9a0x6.jpg",
              imageAlt: "Appetizer plating"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963658688-1p25ivtz.jpg",
              imageAlt: "Elegant dessert"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="A Legacy of Culinary Excellence"
          description={[
            "At Bobo, we believe dining is an art form. Our chefs craft each dish with passion and precision, sourcing the finest ingredients to create unforgettable experiences. From intimate dinners to celebratory gatherings, we transform moments into memories.",
            "Every plate tells a story of dedication, creativity, and respect for flavors that transcend the ordinary."
          ]}
          metrics={[
            { label: "Years of Excellence", value: "15+" },
            { label: "Award-Winning Dishes", value: "50+" }
          ]}
          showBorder={false}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardEighteen
          title="What Makes Bobo Different"
          description="Compare the traditional dining experience with Bobo's innovative approach to culinary excellence."
          negativeCard={{
            title: "Standard Dining",
            items: [
              "Limited ingredient selection",
              "Generic presentation",
              "Rushed experience",
              "One-size-fits-all menus"
            ],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963661533-8b5hjpr0.jpg",
            imageAlt: "Traditional dining setup"
          }}
          positiveCard={{
            title: "The Bobo Experience",
            items: [
              "Locally-sourced premium ingredients",
              "Artistic plating perfection",
              "Unhurried, memorable service",
              "Customized seasonal menus"
            ],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963662649-8levrafw.jpg",
            imageAlt: "Bobo modern dining experience"
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Menu"
          description="Discover our carefully curated selection of culinary masterpieces, crafted by our award-winning kitchen."
          tag="Featured Dishes"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Pan-Seared Salmon",
              price: "$38",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963664999-uo8aas9f.jpg",
              imageAlt: "Pan-seared salmon fillet"
            },
            {
              id: "2",
              name: "Truffle Risotto",
              price: "$34",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963666038-jsllg3ki.jpg",
              imageAlt: "Creamy truffle risotto"
            },
            {
              id: "3",
              name: "Signature Pasta",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963663861-cy37kdqz.jpg",
              imageAlt: "Handmade signature pasta"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from diners who have celebrated special moments at Bobo."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Maria Chen",
              handle: "@mariadines",
              testimonial: "Absolutely exceptional! The salmon was perfectly cooked and the presentation was like art. We'll definitely be back for our anniversary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963667178-44o9s3a5.jpg",
              imageAlt: "Maria Chen",
              linkedin: "https://linkedin.com/in/maria-chen"
            },
            {
              id: "2",
              name: "James Richardson",
              handle: "@jamesreview",
              testimonial: "Best fine dining experience I've had. The service was impeccable and every dish was a revelation. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963668345-mtt1p5rh.jpg",
              imageAlt: "James Richardson",
              linkedin: "https://linkedin.com/in/james-richardson"
            },
            {
              id: "3",
              name: "Sofia Gonzalez",
              handle: "@sofiacooks",
              testimonial: "The attention to detail is remarkable. From the amuse-bouche to dessert, every element was thoughtfully crafted.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963669763-iceozh2i.jpg",
              imageAlt: "Sofia Gonzalez",
              linkedin: "https://linkedin.com/in/sofia-gonzalez"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@davidfoodie",
              testimonial: "A truly memorable evening. The truffle risotto was divine and the wine pairings were expertly chosen. This is fine dining done right.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963671043-8z0ekv7u.jpg",
              imageAlt: "David Park",
              linkedin: "https://linkedin.com/in/david-park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Mail}
          title="Reserve Your Table"
          description="Join our mailing list for exclusive offers, seasonal menu previews, and special dining events. We look forward to welcoming you to Bobo."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765963672096-wk5x215x.jpg"
          imageAlt="Elegant table setting"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Bobo"
          copyrightText="© 2025 Bobo Restaurant. All rights reserved."
          columns={[
            {
              title: "Location",
              items: [
                { label: "123 Culinary Lane", href: "#" },
                { label: "Phone: (555) 123-4567", href: "tel:5551234567" },
                { label: "Email: info@bobo.com", href: "mailto:info@bobo.com" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Lunch: 12-3 PM", href: "#" },
                { label: "Dinner: 6-11 PM", href: "#" },
                { label: "Closed Mondays", href: "#" }
              ]
            },
            {
              title: "Dining",
              items: [
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#contact" },
                { label: "Private Events", href: "#contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Reviews", href: "#testimonials" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
