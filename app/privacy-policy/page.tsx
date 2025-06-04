export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Linsma Impact Limited</h1>
            <h2 className="text-xl text-gray-600 mb-6">Legal Policies</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
                <p className="text-sm text-gray-600 mb-2">Website: <a href="https://www.linsmaimpact.com" className="text-blue-600 hover:text-blue-800 underline">www.linsmaimpact.com</a></p>
                <p className="text-sm text-gray-600">Contact Email: <a href="mailto:info@linsmaimpact.com" className="text-blue-600 hover:text-blue-800 underline">info@linsmaimpact.com</a></p>
            </div>
        </div>

        {/* <!-- Privacy Policy Section --> */}
        <section className="mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">Privacy Policy</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                    This Privacy Policy outlines how Linsma Impact Limited ("we," "our," or "us") collects, uses, and protects your personal data when you visit or interact with our website. We are committed to ensuring the privacy and security of all our users.
                </p>

                {/* <!-- Section 1 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
                    <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and any information voluntarily submitted through forms or communications.</li>
                        <li><strong>Usage Information:</strong> IP address, browser type, device details, and browsing behavior, collected through cookies and tracking tools.</li>
                    </ul>
                </div>

                {/* <!-- Section 2 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
                    <p className="text-gray-700 mb-3">We use your data to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide and improve our website and services.</li>
                        <li>Respond to inquiries and communicate updates.</li>
                        <li>Personalize your user experience.</li>
                        <li>Analyze traffic and trends through analytics tools.</li>
                        <li>Deliver relevant advertising with your consent.</li>
                        <li>Meet legal and regulatory requirements.</li>
                    </ul>
                </div>

                {/* <!-- Section 3 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Cookies and Tracking</h3>
                    <p className="text-gray-700">
                        Our website uses cookies and similar technologies to enhance user experience and gather usage statistics. You may choose to disable cookies via your browser, but this may limit some features.
                    </p>
                </div>

                {/* <!-- Section 4 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">4. Sharing Your Information</h3>
                    <p className="text-gray-700">
                        We do not sell or rent your personal data. We may share information with trusted partners and service providers only when necessary to operate the website or comply with legal obligations.
                    </p>
                </div>

                {/* <!-- Section 5 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">5. Your Rights</h3>
                    <p className="text-gray-700 mb-3">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Access and review your personal data.</li>
                        <li>Request corrections or deletions.</li>
                        <li>Withdraw consent or object to data use.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        To exercise these rights, email us at <a href="mailto:info@linsmaimpact.com" className="text-blue-600 hover:text-blue-800 underline">info@linsmaimpact.com</a>.
                    </p>
                </div>

                {/* <!-- Section 6 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">6. Data Retention</h3>
                    <p className="text-gray-700">
                        We retain personal data only as long as necessary to fulfill the purposes described in this policy or as required by law.
                    </p>
                </div>

                {/* <!-- Section 7 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">7. Data Security</h3>
                    <p className="text-gray-700">
                        We implement appropriate security measures to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute protection.
                    </p>
                </div>

                {/* <!-- Section 8 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8. Children's Privacy</h3>
                    <p className="text-gray-700">
                        We do not knowingly collect personal data from children under 13. If you believe we have done so, please contact us immediately.
                    </p>
                </div>

                {/* <!-- Section 9 --> */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">9. Policy Updates</h3>
                    <p className="text-gray-700">
                        This Privacy Policy may be updated periodically. Any changes will be posted on this page. Continued use of the website implies acceptance of the updated terms.
                    </p>
                </div>
            </div>
        </section>

    </div>
  );
}