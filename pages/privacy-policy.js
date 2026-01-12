import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Our commitment to your privacy. Learn how ColorVerse handles your data."
                canonicalUrl="/privacy-policy"
            />
            <SchemaOrg
                type="WebPage"
                data={{
                    "name": "Privacy Policy",
                    "description": "The privacy policy for ColorVerse."
                }}
            />
            <div className="max-w-3xl mx-auto py-12 prose prose-slate">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>Last updated: January 12, 2026</p>
                    <p>
                        At ColorVerse, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ColorVerse and how we use it.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10">Log Files</h2>
                    <p>
                        ColorVerse follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10">Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, ColorVerse uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10">Consent</h2>
                    <p>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </div>
            </div>
        </>
    );
}
