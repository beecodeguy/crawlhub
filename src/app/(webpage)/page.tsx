import { BannerOne } from "@/assets/images";
import ContactUsBanner from "@/components/containers/Banner/ContactUs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[128px]">
      {/* Manage Crawlers */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex flex-col gap-4">
            <div className="typography-h1">
              We build and manage <span className="text-primary">Crawlers</span>{" "}
              for you.
            </div>
            <span className="leading-[30px] text-[20px]">
              Are you ready to unlock the full potential of your
              <br /> business with powerful, precise, and personalized data?
            </span>
          </div>
          <Button className="mt-6">Get Started</Button>
        </div>
        <Image src={BannerOne} height={398} width={584} alt="" />
      </div>
      {/* Why Choose Crawler Hub */}
      <div>Why Choose Crawlerub?</div>
      {/* Our Services */}
      <div>Our Services</div>
      <ContactUsBanner />
      {/* Our Process */}
      <div>Our Process: How It Works</div>
      <div>What would you like to do?</div>
    </div>
  );
}
