import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import RegisterComponent from "./components/Register";

export default function Page() {
  return (
    <AuthenticationLayout>
      <RegisterComponent />
    </AuthenticationLayout>
  );
}
