import Typography from "@/components/ui/typography"

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Privacy Policy</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: April 29, 2025
            </Typography>

            <Typography variant="p" className="text-muted-foreground">
                At OnePaper, we value your privacy. This page explains how we collect, use, and protect your information when you use our website.
            </Typography>

            <Typography variant="h3">What We Collect</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We may collect basic details like your device type, IP address, and pages you visit. This helps us improve our website and services.
            </Typography>

            <Typography variant="h3">How We Use Your Data</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We use the data to provide and improve your experience. For example:
                - To show content properly on your device.
                - To manage your account if you're logged in.
                - To respond to your messages or feedback.
                - To understand what users find helpful and improve our content.
            </Typography>

            <Typography variant="h3">Data Sharing</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We do not sell your data. We may share it with trusted partners who help us run our website. These partners follow strict privacy rules.
            </Typography>

            <Typography variant="h3">Your Rights</Typography>
            <Typography variant="p" className="text-muted-foreground">
                You can contact us if you want to delete or correct your personal information. We may need to keep some data if required by law.
            </Typography>

            <Typography variant="h3">Security</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We take care to keep your data safe. But no method online is 100% secure, so we cannot guarantee complete safety.
            </Typography>

            <Typography variant="h3">Children’s Privacy</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Our site is not made for children under 13. We do not knowingly collect data from them.
            </Typography>

            <Typography variant="h3">External Links</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Our website may have links to other sites. We are not responsible for their content or privacy rules.
            </Typography>

            <Typography variant="h3">Changes to This Policy</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We may update this Privacy Policy. If we do, we will update the date at the top. We suggest you check this page from time to time.
            </Typography>

            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                For any questions or concerns about this Privacy Policy, feel free to contact us.
            </Typography>
        </div>
    )
}
