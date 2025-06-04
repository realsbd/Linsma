export default function TermsOfService() {
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

            {/* <!-- Terms & Conditions Section --> */}
            <section className="mb-16">
                <div className="bg-white rounded-lg shadow-sm p-8 border">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">Terms & Conditions</h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>

                    {/* <!-- Section 1 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Use of Website</h3>
                        <p className="text-gray-700">
                            You agree to use this site only for lawful purposes. You must not misuse the site by transmitting any harmful or malicious content or attempting to gain unauthorized access.
                        </p>
                    </div>

                    {/* <!-- Section 2 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Intellectual Property</h3>
                        <p className="text-gray-700">
                            All content on this website, including text, graphics, logos, images, and design, is the property of Linsma Impact Limited and is protected by copyright and intellectual property laws. Unauthorized use is prohibited.
                        </p>
                    </div>

                    {/* <!-- Section 3 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">3. User Contributions</h3>
                        <p className="text-gray-700">
                            By submitting content to us (e.g., messages, feedback), you grant us a license to use, reproduce, or share that content for legitimate operational or promotional purposes.
                        </p>
                    </div>

                    {/* <!-- Section 4 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">4. Third-Party Links</h3>
                        <p className="text-gray-700">
                            Our website may include links to external websites. We are not responsible for the content or privacy practices of those sites. Visiting third-party sites is at your own discretion.
                        </p>
                    </div>

                    {/* <!-- Section 5 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">5. Limitation of Liability</h3>
                        <p className="text-gray-700">
                            We are not liable for any direct, indirect, or consequential damages resulting from the use or inability to use the website or any content therein.
                        </p>
                    </div>

                    {/* <!-- Section 6 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">6. Termination</h3>
                        <p className="text-gray-700">
                            We reserve the right to terminate or restrict access to our website at any time for conduct we believe violates these Terms or is harmful to other users or our business.
                        </p>
                    </div>

                    {/* <!-- Section 7 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">7. Advertising and Sponsorship</h3>
                        <p className="text-gray-700">
                            This site may display advertisements and sponsored content. These may use cookies or tracking technologies and are subject to the advertiser's own privacy policies.
                        </p>
                    </div>

                    {/* <!-- Section 8 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">8. Revisions to Terms</h3>
                        <p className="text-gray-700">
                            We may update these Terms & Conditions from time to time. Your continued use of the site implies your acceptance of any changes.
                        </p>
                    </div>

                    {/* <!-- Section 9 --> */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">9. Contact Us</h3>
                        <p className="text-gray-700">
                            If you have any questions about these Terms or our Privacy Policy, please contact us at:
                            <a href="mailto:info@linsmaimpact.com" className="text-blue-600 hover:text-blue-800 underline">info@linsmaimpact.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}