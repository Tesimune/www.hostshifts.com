import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import LoginComponent from "./components/Login";

export default function Page() {
  return (
    <AuthenticationLayout>
      <LoginComponent />
    </AuthenticationLayout>
  );
}
