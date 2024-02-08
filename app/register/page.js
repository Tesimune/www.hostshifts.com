import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import RegisterComponent from "./components/Register";

export default function Page() {
  return (
    <AuthenticationLayout>
      <RegisterComponent />
    </AuthenticationLayout>
  );
}
