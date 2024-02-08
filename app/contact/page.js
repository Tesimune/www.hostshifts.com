import Landing from "./components/Landing";
import GuestLayout from "../Layouts/GuestLayout";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <GuestLayout>
      <Landing />
      <ContactForm />
    </GuestLayout>
  );
}
