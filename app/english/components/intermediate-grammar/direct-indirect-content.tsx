import Typography from "@/components/ui/typography";

export default function DirectIndirectContent() {
    return (
        <div className="space-y-6 leading-7">

            <Typography variant="h3">What is Direct and Indirect Speech?</Typography>
            <p>When we report what someone said, we can say it in two ways:</p>

            <Typography variant="h3">Direct Speech</Typography>
            <p>We use the exact words the person spoke. We put the words in quotation marks (“ ”).</p>
            <p>Example: Ali said, “I am going to the market.”</p>

            <Typography variant="h3">Indirect Speech (Reported Speech)</Typography>
            <p>We report what the person said in our own words. We do not use quotation marks. We often change the tense and some words like pronouns, time, and place.</p>
            <p>Example: Ali said that he was going to the market.</p>

            <Typography variant="h3">Why Do We Use Indirect Speech?</Typography>
            <ul className="list-disc list-inside">
                <li>To report what someone said in the past</li>
                <li>To tell stories or give news</li>
                <li>To sound more natural in writing and speaking</li>
            </ul>

            <Typography variant="h3">How to Change Direct to Indirect Speech</Typography>
            <ul className="list-disc list-inside">
                <li>Step 1: Remove quotation marks</li>
                <li>Step 2: Change the pronouns</li>
                <li>Step 3: Shift the tense one step back (if the reporting verb is in the past)</li>
            </ul>

            <Typography variant="h3">Common Tense Changes</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Direct</th>
                        <th className="border px-4 py-2">Indirect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">"I play."</td><td className="border px-4 py-2">He said he played.</td></tr>
                    <tr><td className="border px-4 py-2">"I am eating."</td><td className="border px-4 py-2">She said she was eating.</td></tr>
                    <tr><td className="border px-4 py-2">"I have done it."</td><td className="border px-4 py-2">He said he had done it.</td></tr>
                    <tr><td className="border px-4 py-2">"I watched it."</td><td className="border px-4 py-2">She said she had watched it.</td></tr>
                    <tr><td className="border px-4 py-2">"I will go."</td><td className="border px-4 py-2">He said he would go.</td></tr>
                    <tr><td className="border px-4 py-2">"I can help."</td><td className="border px-4 py-2">She said she could help.</td></tr>
                </tbody>
            </table>

            <Typography variant="h3">Pronoun Changes</Typography>
            <ul className="list-disc list-inside">
                <li>"I am ready." → She said that she was ready.</li>
                <li>"You are my friend." → I said that he/she was my friend.</li>
            </ul>

            <Typography variant="h3">Time & Place Word Changes</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Direct Speech</th>
                        <th className="border px-4 py-2">Indirect Speech</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">today</td><td className="border px-4 py-2">that day</td></tr>
                    <tr><td className="border px-4 py-2">tomorrow</td><td className="border px-4 py-2">the next day</td></tr>
                    <tr><td className="border px-4 py-2">yesterday</td><td className="border px-4 py-2">the day before</td></tr>
                    <tr><td className="border px-4 py-2">now</td><td className="border px-4 py-2">then</td></tr>
                    <tr><td className="border px-4 py-2">here</td><td className="border px-4 py-2">there</td></tr>
                    <tr><td className="border px-4 py-2">this</td><td className="border px-4 py-2">that</td></tr>
                    <tr><td className="border px-4 py-2">these</td><td className="border px-4 py-2">those</td></tr>
                </tbody>
            </table>

            <Typography variant="h3">Examples of Direct to Indirect Sentences</Typography>

            <Typography variant="h3">Statements</Typography>
            <ul className="list-disc list-inside">
                <li>"I like tea." → He said that he liked tea.</li>
                <li>"I am tired." → She said that she was tired.</li>
            </ul>

            <Typography variant="h3">Questions</Typography>
            <ul className="list-disc list-inside">
                <li>"Where is my phone?" → He asked where his phone was.</li>
                <li>"Do you like pizza?" → She asked if I liked pizza.</li>
            </ul>

            <Typography variant="h3">Commands & Requests</Typography>
            <ul className="list-disc list-inside">
                <li>"Close the door." → He told me to close the door.</li>
                <li>"Please help me." → She requested me to help her.</li>
            </ul>

            <Typography variant="h3">Exclamations</Typography>
            <ul className="list-disc list-inside">
                <li>"What a beautiful dress!" → She exclaimed that it was a beautiful dress.</li>
            </ul>

            <Typography variant="h3">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>"He is happy." → He said that he was happy.</li>
                <li>"I like apples." → She said that she liked apples.</li>
                <li>"Where are you?" → He asked where I was.</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Direct and Indirect Speech helps us report conversations clearly. Start with simple sentences, practice tense and pronoun changes, and try converting 5 sentences every day. You're doing great!</p>
        </div>
    );
}
