import React from "react";
import { Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 sm:p-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-orange-600">
            Immify – Terms of Service
          </h1>
          <p className="text-sm text-gray-500">Effective Date: October 2025</p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome to Immify!
          </h2>
          <p className="text-gray-600">
            By using or accessing our platform, you agree to the Terms of
            Service ("Terms"). Please read them carefully.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h3>
          <p className="text-gray-600">
            By signing up for or using Immify, you agree to follow these Terms
            and any relevant laws and regulations. If you don't agree, you may
            not use the platform.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            2. Service Provided
          </h3>
          <p className="text-gray-600">
            Immify is an immigration lead platform that offers:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Lead management and tracking</li>
            <li>Workflow automation</li>
            <li>Analytics and reporting</li>
            <li>Integration with third-party tools</li>
          </ul>
          <p className="text-gray-600 mt-2">
            We can change or stop features as we see fit, but we will let users
            know about major changes.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            3. User Accounts
          </h3>
          <p className="text-gray-600">
            When creating an account, users must provide accurate and
            up-to-date information. Each user is responsible for keeping login
            details private. You agree to immediately inform Immify if you
            notice any unauthorized use of your account.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            4. User Conduct
          </h3>
          <p className="text-gray-600">You agree not to:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Use Immify for illegal or fraudulent purposes</li>
            <li>Share sensitive information without permission</li>
            <li>
              Reverse engineer or try to access restricted parts of the platform
            </li>
            <li>Disrupt or interfere with how the platform works</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            5. Payment & Subscription
          </h3>
          <p className="text-gray-600">
            Immify offers subscription plans that you can pay for monthly or
            yearly. All payments are non-refundable, except when required by
            law. We reserve the right to change prices with proper notice.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            6. Third-Party Cookies
          </h3>
          <p className="text-gray-600">
            Some cookies are set by third-party services (such as analytics
            tools or advertising networks) to help us improve performance or
            deliver relevant marketing. These third parties may collect
            information about your browser history across multiple websites.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            7. How To Control Cookies
          </h3>
          <p className="text-gray-600">
            You can manage and delete cookies in your browser's settings.
            Disabling cookies may affect the functionality of the Immify
            platform.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            8. Consent
          </h3>
          <p className="text-gray-600">
            When you first visit Immify’s website, a cookie banner will ask for
            permission to use non-essential cookies. Continuing to use the site
            means you agree to our cookie policy. You can change your consent at
            any time in your browser settings.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            9. Updates to This Policy
          </h3>
          <p className="text-gray-600">
            We may update this policy periodically to reflect legal or technical
            changes. The revised version will be posted on this page with a new
            effective date.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h3>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-600" />
            support@immify.com
          </p>
        </section>
      </div>
    </div>
  );
}
