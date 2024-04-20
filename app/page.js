import GuestLayout from "@/components/layouts/GuestLayout";

// Sections
import Landing from "./home-components/Landing";
import DevelopmentTools from "./home-components/DevelopmentTools";
import HostingPlan from "./home-components/HostingPlan";
import CustomerReview from "./home-components/CustomerReview";
import FreequentlyAskedQuestion from "./home-components/FAQs";
import WhyChooseUs from "./home-components/WhyChooseUs";

export default function Home() {
  return (
    <GuestLayout>
      <Landing />
      <DevelopmentTools />
      <HostingPlan />
      <WhyChooseUs />
      <CustomerReview />
      <FreequentlyAskedQuestion />
    </GuestLayout>
  );
}
