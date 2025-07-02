import Navigation from "../components/Navigation";
import Pay from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Pay.PNG"
import Mailing from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/mailing.PNG"
import Donation from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Donation.PNG"
import Contact from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Contact.PNG"

export default function Industry() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <h1 className="text-4xl font-bold">Industry Experience</h1>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">
            <a
              href="https://www.flipnational.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FLIP National
            </a>
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Technology Fellow, <strong>Summer 2024</strong>
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            FLIP National is a nonprofit organization dedicated to empowering
            first-generation students by providing awareness and resources to
            support their academic journey.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">Key Contributions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              Revamped the FLIP National website using <strong>React</strong> and{' '}
              <strong>Tailwind CSS</strong>.
            </li>
            <li>
              Developed a mailing list component integrated with HubSpot to
              streamline communication and manage user subscriptions.
            </li>
            <li>
              Created a responsive contact page to improve user engagement and
              facilitate inquiries.
            </li>
            <li>
              Built a secure donation page, integrating PayPal and Stripe for
              seamless transaction processing.
            </li>
          </ul>
        </section>

        <section>
          <p className="text-lg leading-relaxed text-gray-800">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={Contact} alt="Contact Component" className="rounded shadow" />
              <img src={Donation} alt="Donation Component" className="rounded shadow" />
              <img src={Mailing} alt="Mailing List Component" className="rounded shadow" />
              <img src={Pay} alt="Payment Component" className="rounded shadow" />
            </div>
        </section>
      </div>
    </div>
  );
}