import Image from "next/image";

export default function Hero() {
  return (
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-7 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <h1 className="font-[700] text-[#0A0A70] text-[25px] ">
              Stay Informed with Current and Pending Laws
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Simply Compliance. Stay Ahead of Regulations. Built™&apos;s all-in-one legal library designed to streamline and simplify life sciences compliance. It provides comprehensive access to the most relevant laws, regulations, case rulings, timelines, and government actions, all in one centralized platform.
            </p>

            <div className="pt-4">
              <h2 className="font-[700] text-[#0A0A70] text-[25px]">Key Features:</h2>
              <div className="ps-3 text-[#3A3A5A]">
                <FeatureItem
                  title="• Instant Access to Legal Summaries"
                  description="Navigate clear, concise law summaries organized by topic and state, eliminating the need to sift through lengthy legal documents."
                />
                <FeatureItem
                  title="• State-by-State Regulation Comparisons"
                  description="Easily compare compliance regulations across all 50 states using summary grids, offering a side-by-side view of critical legal requirements."
                />
                <FeatureItem
                  title="• In-Depth Industry Insights"
                  description="Access expert white papers on trending compliance issues and landmark case law in areas such as Anti-kickback, HIPAA, and pricing regulations."
                />
                <FeatureItem
                  title="• Real-Time Legislative Tracking"
                  description="Monitor pending legislation as bills move through Congress, ensuring you stay ahead of emerging regulatory changes before they become law."
                />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-xl font-[700] text-[#0A0A70]">Uses Cases:</h2>
              <ul className="text-gray-600 text-[#3A3A5A] ps-1">
                <li>• Determine if certain specialty line service healthcare practitioner designations</li>
                <li>• Review reportable gifts & their thresholds for each state</li>
                <li>• Know the various price reporting requirements of various states and what the deadlines are</li>
                <li>• Keep up with the ever-changing privacy law landscape as HIPAA covers consumer, health, and patient privacy</li>
                <li>• Understand licensing requirements for your facilities and sales representatives</li>
                <li>• Stay on top of additional compliance and disclosure requirements</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <Image
              src="/images/business-meeting.png"
              alt="Legal gavel and book"
              width= {400}
              height= {691}
              className="w-full h-[291px] object-cover rounded-lg shadow-lg mb-6"
            />
            <Image
              src="/images/law-gavel.png"
              alt="Business professionals discussing"
              width= {400}
              height= {291}
              className="w-full h-[691px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="">
      <h3 className="font-[700] text-[#0A0A70]">{title}</h3>
      <p className="ps-2 text-[#3A3A5A]">{description}</p>
    </div>
  );
}