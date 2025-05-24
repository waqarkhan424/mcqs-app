import Typography from "@/components/ui/typography";

export default function TensesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What are Tenses?</Typography>
            <p>A tense shows the time of an action or event. It tells us when something happens: Now (Present), Before (Past), or Later (Future).</p>

            <Typography variant="h4">Main Types of Tenses</Typography>
            <ul className="list-disc list-inside">
                <li>Present Tense – action happening now</li>
                <li>Past Tense – action that happened before</li>
                <li>Future Tense – action that will happen later</li>
            </ul>
            <p>Each of these has four forms: Simple, Continuous (Progressive), Perfect, and Perfect Continuous. So in total, we have 12 tenses.</p>

            <Typography variant="h4">Present Tenses</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Simple Present:</strong> I eat breakfast at 8 am. / She goes to school.</li>
                <li><strong>Present Continuous:</strong> I am writing a blog. / They are playing football.</li>
                <li><strong>Present Perfect:</strong> I have eaten my lunch. / She has gone to the market.</li>
                <li><strong>Present Perfect Continuous:</strong> I have been studying since morning. / They have been working all day.</li>
            </ul>

            <Typography variant="h4">Past Tenses</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Simple Past:</strong> I watched a movie last night. / He visited Lahore yesterday.</li>
                <li><strong>Past Continuous:</strong> I was watching TV at 9 pm. / They were playing cricket.</li>
                <li><strong>Past Perfect:</strong> I had finished dinner before he came. / She had left the room.</li>
                <li><strong>Past Perfect Continuous:</strong> I had been studying for two hours. / He had been waiting for the bus.</li>
            </ul>

            <Typography variant="h4">Future Tenses</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Simple Future:</strong> I will call you tomorrow. / She will go to the party.</li>
                <li><strong>Future Continuous:</strong> I will be sleeping at 11 pm. / They will be studying.</li>
                <li><strong>Future Perfect:</strong> I will have completed the task by 5 pm. / She will have reached home by then.</li>
                <li><strong>Future Perfect Continuous:</strong> I will have been working here for 5 years. / He will have been driving for 2 hours.</li>
            </ul>

            <Typography variant="h4">Summary Table of Tenses</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Tense Type</th>
                        <th className="border px-4 py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">Simple Present</td><td className="border px-4 py-2">I play football.</td></tr>
                    <tr><td className="border px-4 py-2">Present Continuous</td><td className="border px-4 py-2">I am playing football.</td></tr>
                    <tr><td className="border px-4 py-2">Present Perfect</td><td className="border px-4 py-2">I have played football.</td></tr>
                    <tr><td className="border px-4 py-2">Present Perfect Continuous</td><td className="border px-4 py-2">I have been playing football.</td></tr>
                    <tr><td className="border px-4 py-2">Simple Past</td><td className="border px-4 py-2">I played football.</td></tr>
                    <tr><td className="border px-4 py-2">Past Continuous</td><td className="border px-4 py-2">I was playing football.</td></tr>
                    <tr><td className="border px-4 py-2">Past Perfect</td><td className="border px-4 py-2">I had played football.</td></tr>
                    <tr><td className="border px-4 py-2">Past Perfect Continuous</td><td className="border px-4 py-2">I had been playing football.</td></tr>
                    <tr><td className="border px-4 py-2">Simple Future</td><td className="border px-4 py-2">I will play football.</td></tr>
                    <tr><td className="border px-4 py-2">Future Continuous</td><td className="border px-4 py-2">I will be playing football.</td></tr>
                    <tr><td className="border px-4 py-2">Future Perfect</td><td className="border px-4 py-2">I will have played football.</td></tr>
                    <tr><td className="border px-4 py-2">Future Perfect Continuous</td><td className="border px-4 py-2">I will have been playing football.</td></tr>
                </tbody>
            </table>

            <Typography variant="h4">Tips to Remember</Typography>
            <ul className="list-disc list-inside">
                <li>Present: always, now, today</li>
                <li>Past: yesterday, ago, last</li>
                <li>Future: tomorrow, next week</li>
                <li>Use the right helping verb (am, is, are, was, were, have, had, will...)</li>
                <li>Practice making small sentences with each tense.</li>
            </ul>

            <Typography variant="h4">Common Mistakes</Typography>
            <ul className="list-disc list-inside">
                <li>He go to school. → He goes to school. (Simple Present)</li>
                <li>I am play football. → I am playing football. (Present Continuous)</li>
                <li>She will comes later. → She will come later. (Simple Future)</li>
            </ul>

            <Typography variant="h4">Final Thoughts</Typography>
            <p>Tenses help you talk about time clearly. They are the heart of every sentence. Take one tense at a time. Practice small examples daily. You’ll become confident step by step.</p>
        </div>
    );
}