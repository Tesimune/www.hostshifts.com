import Landing from "./components/Landing";
import GuestLayout from "../layouts/GuestLayout";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <GuestLayout>
      <Landing />
      <ContactForm />
    </GuestLayout>
  );
}
