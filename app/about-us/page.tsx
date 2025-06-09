import Typography from "@/components/ui/typography";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">About Us</Typography>

            <Typography variant="p" className="text-muted-foreground">
                Welcome to <span className="font-semibold text-foreground">OnePaper</span> — your trusted platform for preparing government job tests in Pakistan. Whether you're getting ready for FPSC, PPSC, FIA, ASF, or other one-paper exams, our site is designed to help you succeed.
            </Typography>

            <Typography variant="h3">Our Mission</Typography>
            <Typography variant="p" className="text-muted-foreground">
                Our mission is simple: to make exam preparation easy, organized, and accessible for everyone. We aim to provide students and job seekers with reliable, topic-wise MCQs, detailed answers, and clear explanations — all in one place.
            </Typography>

            <Typography variant="h3">What We Offer</Typography>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Topic-wise MCQs in English, General Knowledge, Current Affairs, Islamic Studies, Mathematics, Computer, Science, and more.</li>
                <li>Past papers categorized by department such as FIA, ASF, NAB, and PPSC.</li>
                <li>Detailed grammar explanations for English learners.</li>
                <li>Vocabulary section with Urdu meanings and examples.</li>
                <li>Professional design for better readability and learning experience.</li>
            </ul>

            <Typography variant="h3">Who It's For</Typography>
            <Typography variant="p" className="text-muted-foreground">
                OnePaper is built for students, fresh graduates, and job aspirants across Pakistan who want to prepare effectively for competitive exams — especially one-paper MCQ-based tests.
            </Typography>

            <Typography variant="h3">Why Choose Us</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We focus on clarity, structure, and ease of use. Our platform is student-friendly, frequently updated, and designed to match real exam patterns. Unlike scattered resources online, OnePaper brings everything together in one place — for free.
            </Typography>

            <Typography variant="h3">Stay Connected</Typography>
            <Typography variant="p" className="text-muted-foreground">
                We're constantly improving. If you have feedback, topic suggestions, or want to contribute, feel free to contact us. Together, we can help thousands of students prepare better.
            </Typography>
        </div>
    );
}
