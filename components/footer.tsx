import FacebookLogo from "@/public/images/facebook";
import InstagramLogo from "@/public/images/instagram";
import LinkedInLogo from "@/public/images/linkedin";
import LocationIcon from "@/public/images/location";
import MyLogo from "@/public/images/logo";
import MailIcon from "@/public/images/mail";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-12">
      <div className="mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-900 max-w-[1100px]">
        <div className="flex flex-col items-start">
          <MyLogo />
          <p className="mt-2 text-sm">Connecting Your Compliance Dots</p>
        </div>

        <div>
          <h3 className="font-[700] mb-2">G&M Health</h3>
          <ul className="space-y-1 text-sm">
            {["Home", "Our Solution", "Services", "Our Company", "Blog", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline font-[400]">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="text-sm">
          <p className="flex items-center">
            <span className="pb-4"><LocationIcon /></span>
            <span className="ps-1">285 Davidson Avenue | Suite 103 | Somerset, NJ 08873, United States</span>
          </p>
          <p className="mt-2 flex items-center">
            <MailIcon />
            <span className="ps-1">info@gmhllc.com</span>
          </p>
          <p className="mt-4 font-[900]">Business Hours</p>
          <p>🕒 Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>

          <div className="mt-4 flex space-x-4 item-center">
            <span className="font-[900] pt-1">Connect</span>
            <Link href="#" className="hover:text-blue-500">
              <LinkedInLogo />
            </Link>
            <Link href="#" className="hover:text-blue-500 pt-2">
              <InstagramLogo />
            </Link>
            <Link href="#" className="hover:text-blue-500">
              <FacebookLogo />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A70] font-[400] text-[16px] text-white text-center py-4 text-sm flex justify-evenly mt-8 pb-10 pt-10 text-sm">
        <p>© 2025 G&M Health</p>
        <p>website by Neevi Studio</p>
      </div>
    </footer>
  );
}
