import GuestLayout from "./Layouts/GuestLayout";

// Sections
import Landing from "./HomeComponents/Landing";
import DevelopmentTools from "./HomeComponents/DevelopmentTools";
import HostingPlan from "./HomeComponents/HostingPlan";
import CustomerReview from "./HomeComponents/CustomerReview";
import FreequentlyAskedQuestion from "./HomeComponents/FAQs";

export default function Home() {
  return (
    <GuestLayout>
      <Landing />
      <DevelopmentTools />
      <HostingPlan />
      <CustomerReview />
      <FreequentlyAskedQuestion />
    </GuestLayout>
  );
}
