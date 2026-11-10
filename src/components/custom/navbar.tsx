import BrandNameAndLogo from "./brand-name-and-logo";
import UserAuthStatus from "./user-auth-status";

export default function Navbar() {
  return (
    <header className="min-w-screen px-4 py-2 flex justify-between items-center fixed top-0">
      <BrandNameAndLogo />
      <UserAuthStatus />
    </header>
  );
}
