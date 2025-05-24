import Typography from "@/components/ui/typography";

export default function InversionContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is Inversion?</Typography>
            <p><strong>Inversion</strong> means changing the normal word order in a sentence. Usually, in English, the subject comes before the verb. In inversion, the verb comes before the subject in some special cases.</p>

            <Typography variant="h4">Why Use Inversion?</Typography>
            <ul className="list-disc list-inside">
                <li>To sound more formal or literary</li>
                <li>To emphasize something</li>
                <li>To form questions</li>
            </ul>

            <Typography variant="h4">1. Inversion in Questions</Typography>
            <p>In questions, we naturally use inversion.</p>
            <ul className="list-disc list-inside">
                <li>Normal: You are coming.</li>
                <li>Question (Inversion): Are you coming?</li>
                <li>Normal: He has finished.</li>
                <li>Question: Has he finished?</li>
            </ul>

            <Typography variant="h4">2. Inversion After Negative Expressions</Typography>
            <p>When the sentence starts with a negative or limiting word, we invert the subject and verb.</p>
            <p><strong>Common negative expressions:</strong> never, rarely, seldom, hardly, not only, under no circumstances, at no time, little, etc.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Never have I seen such a beautiful sunset.</li>
                <li>Rarely does he speak in public.</li>
                <li>Not only did she pass the exam, but she also got the highest marks.</li>
                <li>At no time were they in danger.</li>
            </ul>

            <Typography variant="h4">3. Inversion After "So" and "Such"</Typography>
            <p>We use inversion after "so" and "such" for emphasis, especially with "that" clauses.</p>
            <ul className="list-disc list-inside">
                <li>So tired was he that he fell asleep instantly.</li>
                <li>Such was her beauty that everyone stared at her.</li>
            </ul>

            <Typography variant="h4">4. Inversion After "Only" Expressions</Typography>
            <p>We use inversion after certain expressions starting with "only." Examples: only after, only when, only if, only then, only by, etc.</p>
            <ul className="list-disc list-inside">
                <li>Only after the meeting did I understand the problem.</li>
                <li>Only when he spoke did they listen.</li>
                <li>Only by working hard will you succeed.</li>
            </ul>

            <Typography variant="h4">5. Inversion After "Not Until"</Typography>
            <ul className="list-disc list-inside">
                <li>Not until I called her did she know the truth.</li>
                <li>Not until the rain stopped could we go outside.</li>
            </ul>

            <Typography variant="h4">6. Inversion with Conditionals (Without "if")</Typography>
            <p>Sometimes, we can remove "if" in conditional sentences and use inversion instead.</p>
            <ul className="list-disc list-inside">
                <li>Normal: If I had known, I would have helped.</li>
                <li>Inversion: Had I known, I would have helped.</li>
                <li>Normal: If you should need help, call me.</li>
                <li>Inversion: Should you need help, call me.</li>
            </ul>

            <Typography variant="h4">How to Spot Inversion</Typography>
            <ul className="list-disc list-inside">
                <li>Look for special words like never, rarely, only, not until, etc.</li>
                <li>Check if the verb comes before the subject.</li>
                <li>Ask: Is this a question or a formal statement?</li>
            </ul>


            <Typography variant="h4">Final Thoughts</Typography>
            <p>Inversion helps you speak and write more formally and clearly. You don’t need to use it all the time, but knowing how it works will improve your English. Keep practicing with real examples!</p>
        </div>
    );
}
