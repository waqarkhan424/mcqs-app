import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function CopyrightPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Copyright Policy</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Last updated: June 9, 2025
            </Typography>

            <Typography variant="h3">Content Ownership</Typography>
            <Typography variant="p" className="text-muted-foreground">
                All materials on{" "}
                <Link
                    href="https://www.onepaper.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                >
                    https://www.onepaper.site/
                </Link>{" "}
                including text, images, MCQs, and explanations, are the property of OnePaper or its contributors. These resources are protected by copyright and intellectual property laws. Any unauthorized copying, distribution, or use is strictly prohibited.

            </Typography>

            <Typography variant="h3">How to Report a Copyright Issue</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you believe that any content on our site violates your copyright, you can report it by contacting us with the following details:
            </Typography>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                    <strong>Description of the copyrighted content:</strong> Describe what has been infringed.
                </li>
                <li>
                    <strong>Location of the material:</strong> Include the exact link or section where the material appears on our site.
                </li>
                <li>
                    <strong>Your contact information:</strong> Full name, address, phone number, and email address.
                </li>
                <li>
                    <strong>Good faith statement:</strong> A statement that you believe the use is not permitted by the copyright owner.
                </li>
                <li>
                    <strong>Authority confirmation:</strong> A declaration that the information provided is accurate and that you are authorized to act on behalf of the copyright holder.
                </li>
            </ul>

            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                If you need to report a copyright violation, feel free to contact us.
            </Typography>
        </div>
    );
}
