import GuestLayout from "./Layouts/GuestLayout";

// Sections
import Landing from "./HomeComponents/Landing";
import DevelopmentTools from "./HomeComponents/DevelopmentTools";
import HostingPlan from "./HomeComponents/HostingPlan";
import CustomerReview from "./HomeComponents/CustomerReview";
import FreequentlyAskedQuestion from "./HomeComponents/FAQs";
import WhyChooseUs from "./HomeComponents/WhyChooseUs";

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
