import MailWhiteIcon from "@/public/images/mailWhite";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LocationWhiteIcon from "@/public/images/locationWhite";

export default function Contact() {
  return (
    <div className="max-w-[1500px] mx-auto py-2 border rounded-xl shadow-xl mx-10">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-[#0A0A70] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">We&apos;re Here to Help!</h2>
          <p className="mb-12 text-[#B2B2B2]">
            Have questions or need assistance? Get in touch with our team for expert guidance and support.
          </p>

          <div className="space-y-6 pt-48">
            <div className="flex items-start gap-4">
              <span className="pb-4 text-white"><LocationWhiteIcon /></span>
              <div>
                <p>285 Davidson Avenue | Suite 103 |</p>
                <p>Somerset, NJ 08873, United States</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MailWhiteIcon />
              <a href="mailto:info@gmhllc.com" className="hover:underline">
                info@gmhllc.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Business Hours</h3>
              <div className="flex items-center gap-4">
                
                <p> 🕒 Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-12 pe-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <Input placeholder="First Name"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <Input placeholder="Last Name" defaultValue="Doe" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input placeholder="Phone Number" defaultValue="+1 012 3456 789" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea 
              placeholder="Write your message.."
              className="min-h-[120px]"
            />
          </div>

          <div className="flex justify-center">
            <Button className="bg-[#BC1972] hover:bg-[#d81b60] text-white w-20 rounded-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}