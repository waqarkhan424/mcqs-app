import Typography from "@/components/ui/typography";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">About Us</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Welcome to <span className="font-semibold text-foreground">OnePaper</span> — a helpful platform made for students and job seekers in Pakistan. Whether you’re preparing for FPSC, PPSC, FIA, ASF, or any other one-paper exam, OnePaper is here to support your success with simple and organized study material.
            </Typography>

            <Typography variant="h3">Our Mission</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Our mission is to make exam preparation easy and effective. We offer topic-based MCQs, clear explanations, and reliable past paper content to help you feel confident while studying.
            </Typography>

            <Typography variant="h3">What We Offer</Typography>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>MCQs by subject: English, General Knowledge, Islamic Studies, Current Affairs, Math, Computer, and more.</li>
                <li>Past papers sorted by department like FIA, ASF, NAB, and PPSC.</li>
                <li>Helpful grammar lessons for better English learning.</li>
                <li>Vocabulary with Urdu meanings and real-life examples.</li>
                <li>A clean and simple design that makes reading and learning easier.</li>
            </ul>

            <Typography variant="h3">Who It's For</Typography>
            <Typography variant="p" className="text-muted-foreground">
                This platform is made for students, fresh graduates, and job seekers in Pakistan who want to prepare well for one-paper MCQ-based exams.
            </Typography>

            <Typography variant="h3">Why Choose Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                OnePaper is built to make your learning journey smooth. We focus on easy navigation, quality questions, and regularly updated content. Unlike scattered online resources, everything you need is available here in one place — and it’s completely free.
            </Typography>

            <Typography variant="h3">Stay Connected</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We're always working to improve. If you have ideas, want to share suggestions, or contribute to the platform, we’d love to hear from you. Together, we can help thousands of students prepare better for their future.
            </Typography>
        </div>
    );
}
