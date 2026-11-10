import BrandLogo from "./brand-logo";
import BrandName from "./brand-name";

export default function BrandNameAndLogo() {
  return (
    <div className="flex gap-2">
      <BrandLogo />
      <BrandName />
    </div>
  );
}
