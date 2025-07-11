import NavigationBar from "../components/Navigation";
import Pay from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Pay.PNG"
import Mailing from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/mailing.PNG"
import Donation from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Donation.PNG"
import Contact from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Contact.PNG"

function Industry() {
  return (
    <div>
      <NavigationBar />
      <div className="min-h-screen p-6">

        <h1 className="text-3xl font-bold mb-6">Industry</h1>

        <div className="mb-20 border-gray-300 rounded-2xl shadow-md bg-red-100 p-4">
           <h2 className="text-3xl font-bold mb-2">
             <a
               href="https://www.flipnational.org/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 hover:underline"
             >
               FLIP National
             </a>
           </h2>
           <h2 className="text-xl font-semibold text-gray-700">
             Technology Fellow, <strong>Summer 2024</strong>
           </h2>
          <p className="text-lg leading-relaxed text-gray-800">
             FLIP National is a nonprofit organization dedicated to empowering
             first-generation students by providing awareness and resources to
             support their academic journey.
           </p>
          <div>
            <h3 className="text-3xl font-semibold pt-6">Contributions:</h3>
            <ul className="list-disc list-inside text-lg space-y-1 text-gray-800">
              <li>
                Revamped the FLIP National website using <strong>React</strong> and{' '}
                <strong>Tailwind CSS</strong>.
              </li>
              <li>
                Developed a <strong>mailing list component</strong> integrated with HubSpot to
                streamline communication and manage user subscriptions.
              </li>
              <li>
                Created a responsive <strong>contact page</strong> to improve user engagement and
                facilitate inquiries.
              </li>
              <li>
                Built a secure <strong>donation page</strong>, integrating PayPal and Stripe for
                seamless transaction processing.
              </li>
            </ul>
            <div>
              <p className="text-lg leading-relaxed text-gray-800 pt-6">
                Check out the project on{' '}
                <a
                  href="https://github.com/FLIP-National/flip-national-cloudflare-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                . Below is a sample of my work:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <img src={Contact} alt="Contact Component" className="rounded shadow" />
                <img src={Donation} alt="Donation Component" className="rounded shadow" />
                <img src={Mailing} alt="Mailing List Component" className="rounded shadow" />
                <img src={Pay} alt="Payment Component" className="rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industry;