import Typography from "@/components/ui/typography";

export default function GerundsAndInfinitivesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What are Gerunds and Infinitives?</Typography>
            <p>Do you get confused between using "to eat" or "eating"? Don’t worry! This lesson will explain everything about <strong>gerunds</strong> and <strong>infinitives</strong> in very simple words.</p>

            <Typography variant="h4">What is a Gerund?</Typography>
            <p>A <strong>gerund</strong> is the <em>-ing</em> form of a verb that acts like a noun.</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Reading is fun.</li>
                <li>I enjoy swimming.</li>
                <li>She likes cooking.</li>
            </ul>

            <Typography variant="h4">What is an Infinitive?</Typography>
            <p>An <strong>infinitive</strong> is the base form of a verb with <em>"to"</em> in front of it.</p>
            <ul className="list-disc list-inside space-y-1">
                <li>I want to sleep.</li>
                <li>He decided to go.</li>
                <li>She hopes to win.</li>
            </ul>

            <Typography variant="h4">When to Use a Gerund?</Typography>
            <p>Some verbs are followed by a gerund (verb + -ing).</p>
            <ul className="list-disc list-inside space-y-1">
                <li>enjoy</li>
                <li>avoid</li>
                <li>finish</li>
                <li>mind</li>
                <li>suggest</li>
            </ul>
            <p>Examples:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>I enjoy reading.</li>
                <li>She avoided talking to him.</li>
                <li>We finished eating.</li>
            </ul>

            <Typography variant="h4">When to Use an Infinitive?</Typography>
            <p>Some verbs are followed by an infinitive (to + verb).</p>
            <ul className="list-disc list-inside space-y-1">
                <li>want</li>
                <li>need</li>
                <li>decide</li>
                <li>hope</li>
                <li>plan</li>
            </ul>
            <p>Examples:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>I want to study.</li>
                <li>They decided to leave.</li>
                <li>We plan to travel.</li>
            </ul>

            <Typography variant="h4">Verbs That Take Both (Different Meaning)</Typography>
            <p>Some verbs can be followed by both, but the meaning changes.</p>
            <p><strong>Example: Stop</strong></p>
            <ul className="list-disc list-inside space-y-1">
                <li>I stopped smoking. (I quit the habit.)</li>
                <li>I stopped to smoke. (I paused something else to smoke.)</li>
            </ul>

            <Typography variant="h4">Verbs That Take Both (Same Meaning)</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>like</li>
                <li>love</li>
                <li>hate</li>
                <li>start</li>
                <li>begin</li>
            </ul>
            <p>Examples:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>I like reading. / I like to read.</li>
                <li>She started crying. / She started to cry.</li>
            </ul>

            <Typography variant="h4">Gerund After Prepositions</Typography>
            <p>Always use a gerund after a preposition.</p>
            <ul className="list-disc list-inside space-y-1">
                <li>She is good at drawing.</li>
                <li>We talked about going to the beach.</li>
                <li>He’s afraid of failing.</li>
            </ul>

            <Typography variant="h4">Infinitive After Adjectives</Typography>
            <p>Use infinitives after adjectives.</p>
            <ul className="list-disc list-inside space-y-1">
                <li>It’s easy to learn English.</li>
                <li>I’m happy to help you.</li>
                <li>She was surprised to see him.</li>
            </ul>

            <Typography variant="h4">Summary Table</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Use</th>
                        <th className="border px-4 py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Verb + Gerund</td>
                        <td className="border px-4 py-2">I enjoy reading.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Verb + Infinitive</td>
                        <td className="border px-4 py-2">I want to sleep.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Preposition + Gerund</td>
                        <td className="border px-4 py-2">She’s interested in learning.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Adjective + Infinitive</td>
                        <td className="border px-4 py-2">It’s hard to believe.</td>
                    </tr>
                </tbody>
            </table>



            <Typography variant="h4">Final Thoughts</Typography>
            <p>Gerunds and infinitives are not hard. Just remember the rules, practice with examples, and you’ll get better with time. </p>
        </div>
    );
}