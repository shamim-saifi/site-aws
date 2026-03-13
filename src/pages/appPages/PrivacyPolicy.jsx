import React from "react";
import { Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 sm:p-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-orange-600">
            Immify – Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Effective Date: October 2025</p>
        </div>

        {/* Intro */}
        <section>
          <p className="text-gray-600">
            At Immify, your privacy is our top priority. This Privacy Policy
            explains how we collect, use, and protect your personal data while
            you use our platform and services.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            1. The Information We Collect
          </h2>
          <p className="text-gray-600">
            We collect data to deliver and improve our services, which include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
            <li>
              <strong>Personal Information:</strong> When you create an account
              or get in touch with us, you provide your name, email address,
              phone number, and company details.
            </li>
            <li>
              <strong>Business Information:</strong> Business information, client
              records, visa types, and other professional data are entered into
              Immify.
            </li>
            <li>
              <strong>Usage Details:</strong> Log files, IP addresses, device
              types, browsers, and user interactions are collected to improve
              efficiency and security.
            </li>
            <li>
              <strong>Payment Details:</strong> Payment information is processed
              securely using trusted third-party payment networks.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">We use your personal information to:</p>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
            <li>Provide access to the Immify platform and its features.</li>
            <li>Manage user accounts and subscriptions.</li>
            <li>Send service updates, reports, and support communications.</li>
            <li>Improve user experience and platform performance.</li>
            <li>Ensure compliance with legal and security standards.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            We do not sell or exchange your personal information with any third
            party.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            3. Data Security
          </h2>
          <p className="text-gray-600">
            We use industry-standard encryption, firewalls, and access controls
            to protect your data. Access to customer data is only given to
            authorized personnel.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            4. Data Retention
          </h2>
          <p className="text-gray-600">
            We keep your data only for as long as necessary to provide services
            or meet legal requirements. To request deletion of your data, please
            contact{" "}
            <a
              href="mailto:support@immify.com"
              className="text-orange-600 underline"
            >
              support@immify.com
            </a>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            5. Sharing of Information
          </h2>
          <p className="text-gray-600">
            We may share limited information with:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
            <li>
              <strong>Service Providers:</strong> for hosting, analytics, and
              payment processing.
            </li>
            <li>
              <strong>Legal Authorities:</strong> as required by law or
              regulation.
            </li>
          </ul>
          <p className="text-gray-600 mt-2">
            All third-party partners follow strict confidentiality and data
            protection guidelines.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            6. Cookies and Tracking Technology
          </h2>
          <p className="text-gray-600">
            Immify uses cookies to improve performance and personalize your
            experience. You can adjust your cookie settings through your
            browser.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            7. Your Rights
          </h2>
          <p className="text-gray-600">Depending on where you live, you may have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
            <li>Access, correct, or delete your information.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Request a copy of your data.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            To make a request, please email{" "}
            <a
              href="mailto:privacy@immify.com"
              className="text-orange-600 underline"
            >
              privacy@immify.com
            </a>
            .
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            8. International Data Transfer
          </h2>
          <p className="text-gray-600">
            Your information may be processed outside of your country. Immify
            ensures proper safeguards and compliance with global privacy
            regulations.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            9. Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with the new effective date.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-600" />
            support@immify.com
          </p>
        </section>
      </div>
    </div>
  );
}
