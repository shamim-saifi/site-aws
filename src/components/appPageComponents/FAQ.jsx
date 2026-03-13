import React from "react";

const faqs = [
  {
    question: "What is Immify?",
    answer: `Immify is a complete SaaS platform for immigration advisors, visa agencies, and legal organizations.
It helps you create leads, manage clients, automate tasks, and track cases, making it easier for your firm to grow and perform well.`
  },
  {
    question: "Who Can Use Immify?",
    answer: `Immify is for:
- Immigration consultants
- Visa agencies
- Immigration law firms
- Study abroad consultants

If you handle visa or immigration processes, Immify can help you make things faster and more efficient.`
  },
  {
    question: "What Features Does Immify Offer?",
    answer: `- Lead Management: Verified, high-interest leads from various visa types
- CRM and Pipelines: Track client journeys from initial inquiry to approval
- Automation: Set up follow-ups, reminders, and document requests
- Analytics and Reporting: Track conversions, marketing returns, and agent performance
- Multi-Country Support: Manage applications for Canada, Australia, UK, USA, and more`
  },
  {
    question: "Does Immify Support Multiple Users and Teams?",
    answer: `Yes! Immify allows multi-user accounts with role-based access, helping your team work smoothly while keeping data secure.`
  },
  {
    question: "Is My Clients' Data Secure on Immify?",
    answer: `Absolutely. Immify uses industry-standard encryption and security measures to protect your clients' information. Your data is safe and private.`
  },
  {
    question: "Can Immify Help Me Generate More Leads?",
    answer: `Yes. Immify provides tools for lead generation, marketing, and website integration that help you consistently attract good leads.`
  },
  {
    question: "How Does Immify Save Time in My Practice?",
    answer: `Immify automates repetitive tasks like follow-ups, notifications, and document handling.
This reduces manual work, mistakes, and delays, so you can focus on clients who add value.`
  },
  {
    question: "What Countries and Visa Programs Are Supported?",
    answer: `Immify supports several destinations and programs, including:
- Canada: Study, Work, and Permanent Residency
- Australia: Study, Work, and Permanent Residency
- UK: Work, Study, and Immigration
- USA: Work, Study, Green Card, and more`
  },
  {
    question: "Do I Need Technical Skills to Use Immify?",
    answer: `No, you don't! Immify is easy to use and has dashboards, workflows, and tools designed for immigration professionals.`
  },
  {
    question: "Is a Free Trial Available?",
    answer: `Yes! You can try Immify for free to explore all its features before deciding. No credit card is needed for the trial.`
  },
  {
    question: "How Can I Get Help if I Have Questions?",
    answer: `Immify offers professional support via email, chat, and phone.
Our team is ready to assist you in making the most of the platform.`
  },
  {
    question: "Does Immify Integrate with Other Tools?",
    answer: `Yes. Immify connects with major tools like email platforms, marketing software, and payment systems, making it easy to link with your current setup.`
  }
];


const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
      </div>

      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
