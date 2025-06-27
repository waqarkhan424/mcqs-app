import Typography from "@/components/ui/typography"

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Privacy Policy</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: April 29, 2025
            </Typography>

            <Typography variant="p" className="text-muted-foreground">
                Hi there — thanks for stopping by OnePaper. This page explains how we handle the information you share with us while using our site. We believe in keeping things clear and straightforward.
            </Typography>

            <Typography variant="h3">What We Learn From You</Typography>
            <Typography variant="p" className="text-muted-foreground">
                When you use our website, a few basic things are automatically collected — like your IP address, device type, and the pages you browse. This gives us a better idea of how people use OnePaper and what we can improve.
            </Typography>

            <Typography variant="h3">Why It Matters</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We use this info to make OnePaper work better for you. Here's what that looks like in practice:
            </Typography>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Making sure the site fits your screen and device.</li>
                <li>Remembering your preferences when you're logged in.</li>
                <li>Responding if you send us a message.</li>
                <li>Learning which topics or pages help people the most.</li>
            </ul>

            <Typography variant="h3">Do We Share Your Info?</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We don’t sell or trade your data. Sometimes we use trusted services to help us keep things running — like hosting or website analytics. They only see what they need to, and they follow strong privacy rules just like we do.
            </Typography>

            <Typography variant="h3">Your Choices</Typography>
            <Typography variant="p" className="text-muted-foreground">
                You can always contact us if you want your personal information corrected or removed. In some situations, we may need to hang on to a bit of information for legal reasons, but we’ll always let you know why.
            </Typography>

            <Typography variant="h3">Keeping Your Info Safe</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We take steps to protect your data, using security tools and best practices. Still, no system is perfect — so while we do everything we can, we can’t promise absolute security.
            </Typography>

            <Typography variant="h3">For Parents and Kids</Typography>
            <Typography variant="p" className="text-muted-foreground">
                OnePaper isn’t meant for children under 13. We don’t knowingly collect any info from young users. If you think your child has shared something with us, let us know and we’ll take care of it quickly.
            </Typography>

            <Typography variant="h3">Other Sites</Typography>
            <Typography variant="p" className="text-muted-foreground">
                You might find links to outside websites on OnePaper. We include them for extra info, but we don’t control their privacy policies. It’s a good idea to check their policies if you visit.
            </Typography>

            <Typography variant="h3">Changes to This Policy</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If we ever update this privacy policy, we’ll change the date at the top so you’ll know. Feel free to revisit this page now and then to stay in the know.
            </Typography>

            <Typography variant="h3">Talk to Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you ever have a question about how we handle your info, reach out to us. You can contact us and we’ll get back to you as soon as we can.
            </Typography>
        </div>
    )
}
