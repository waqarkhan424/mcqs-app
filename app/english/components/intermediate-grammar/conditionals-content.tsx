import Typography from "@/components/ui/typography";

export default function ConditionalsContent() {
    return (
        <div className="space-y-6 leading-7">

            <Typography variant="h3">What are Conditionals?</Typography>
            <p>Conditionals are sentences that describe a situation and the result of that situation. They usually have two parts:</p>
            <ul className="list-disc list-inside">
                <li><strong>Condition</strong> – the “if” part</li>
                <li><strong>Result</strong> – the outcome or what happens</li>
            </ul>
            <p><strong>Example:</strong> If it rains, we will stay at home.</p>

            <Typography variant="h3">Structure of Conditional Sentences</Typography>
            <p>Most conditionals follow this pattern: <strong>If + condition, result</strong>. But the verb tense changes depending on the type of conditional.</p>

            <Typography variant="h3">Types of Conditionals</Typography>

            <Typography variant="h3">Zero Conditional – (Real, General Truths)</Typography>
            <p><strong>Structure:</strong> If + present simple, present simple</p>
            <ul className="list-disc list-inside">
                <li>If you heat water to 100°C, it boils.</li>
                <li>If it rains, the ground gets wet.</li>
            </ul>

            <Typography variant="h3">First Conditional – (Real, Future Possibility)</Typography>
            <p><strong>Structure:</strong> If + present simple, will + base verb</p>
            <ul className="list-disc list-inside">
                <li>If it rains, I will take an umbrella.</li>
                <li>If I study, I will pass the test.</li>
            </ul>

            <Typography variant="h3">Second Conditional – (Unreal, Present or Future)</Typography>
            <p><strong>Structure:</strong> If + past simple, would + base verb</p>
            <ul className="list-disc list-inside">
                <li>If I had a car, I would drive to work.</li>
                <li>If she studied more, she would get better marks.</li>
            </ul>

            <Typography variant="h3">Third Conditional – (Unreal, Past)</Typography>
            <p><strong>Structure:</strong> If + had + past participle, would have + past participle</p>
            <ul className="list-disc list-inside">
                <li>If I had studied, I would have passed.</li>
                <li>If they had left earlier, they would have caught the train.</li>
            </ul>

            <Typography variant="h3">Comparison Table of Conditionals</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Type</th>
                        <th className="border px-4 py-2">Condition Example</th>
                        <th className="border px-4 py-2">Result Example</th>
                        <th className="border px-4 py-2">Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Zero</td>
                        <td className="border px-4 py-2">If you touch fire</td>
                        <td className="border px-4 py-2">it burns</td>
                        <td className="border px-4 py-2">General truths / facts</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">First</td>
                        <td className="border px-4 py-2">If I see her</td>
                        <td className="border px-4 py-2">I will talk to her</td>
                        <td className="border px-4 py-2">Real future possibility</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Second</td>
                        <td className="border px-4 py-2">If I won the lottery</td>
                        <td className="border px-4 py-2">I would buy a house</td>
                        <td className="border px-4 py-2">Unreal present/future</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Third</td>
                        <td className="border px-4 py-2">If I had studied</td>
                        <td className="border px-4 py-2">I would have passed</td>
                        <td className="border px-4 py-2">Unreal past / regret</td>
                    </tr>
                </tbody>
            </table>

            <Typography variant="h3">Mixed Conditionals</Typography>
            <p>Sometimes we mix tenses in conditionals. Example:</p>
            <p>If I had studied (past), I would be a doctor now (present).</p>

            <Typography variant="h3">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>If it will rain, I will stay home. → <strong>If it rains</strong>, I will stay home.</li>
                <li>If I would have studied, I would have passed. → <strong>If I had studied</strong>, I would have passed.</li>
                <li>If he would be tall, he would play basketball. → <strong>If he were tall</strong>, he would play basketball.</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Conditionals help you talk about real, possible, or imaginary situations. Start with zero and first conditionals, then move to second and third. Practice makes it easy!</p>
        </div>
    );
}
