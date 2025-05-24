import Typography from "@/components/ui/typography";

export default function SubjectVerbContent() {
    return (
        <div className="space-y-6 leading-7">

            <Typography variant="h3">What is Subject-Verb Agreement?</Typography>
            <p>In English grammar, the subject and the verb in a sentence must agree in number. If the subject is singular, the verb should be singular. If the subject is plural, the verb should be plural.</p>
            <ul className="list-disc list-inside">
                <li>He eats breakfast at 8 am. ✅</li>
                <li>They eat breakfast at 8 am. ✅</li>
                <li>He eat breakfast. ❌</li>
            </ul>

            <Typography variant="h3">Basic Rule</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Subject</th>
                        <th className="border px-4 py-2">Verb</th>
                        <th className="border px-4 py-2">Sentence</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">She</td><td className="border px-4 py-2">sings</td><td className="border px-4 py-2">She sings well.</td></tr>
                    <tr><td className="border px-4 py-2">They</td><td className="border px-4 py-2">sing</td><td className="border px-4 py-2">They sing well.</td></tr>
                    <tr><td className="border px-4 py-2">The dog</td><td className="border px-4 py-2">barks</td><td className="border px-4 py-2">The dog barks loudly.</td></tr>
                    <tr><td className="border px-4 py-2">The dogs</td><td className="border px-4 py-2">bark</td><td className="border px-4 py-2">The dogs bark loudly.</td></tr>
                </tbody>
            </table>

            <Typography variant="h3">How to Identify Subject and Verb</Typography>
            <p>Subject = who/what does the action; Verb = the action word</p>
            <ul className="list-disc list-inside">
                <li>Ali plays cricket.</li>
                <li>The students study hard.</li>
            </ul>

            <Typography variant="h3">Rules for Different Subjects</Typography>

            <Typography variant="h3">With “I” and “You”</Typography>
            <p>Even though “I” and “you” are singular, we use plural verbs.</p>
            <ul className="list-disc list-inside">
                <li>I go to school.</li>
                <li>You look happy.</li>
            </ul>

            <Typography variant="h3">With He/She/It or Singular Nouns</Typography>
            <p>Use -s or -es with the verb in present tense.</p>
            <ul className="list-disc list-inside">
                <li>She likes ice cream.</li>
                <li>The baby cries a lot.</li>
                <li>My friend works at a hospital.</li>
            </ul>

            <Typography variant="h3">With Plural Subjects</Typography>
            <p>Do not add -s or -es to the verb.</p>
            <ul className="list-disc list-inside">
                <li>They play football.</li>
                <li>The students study every day.</li>
            </ul>

            <Typography variant="h3">Special Subject-Verb Agreement Rules</Typography>

            <Typography variant="h3">Subjects Joined by "and"</Typography>
            <ul className="list-disc list-inside">
                <li>Ali and Sara are going to school.</li>
                <li>My brother and I play chess.</li>
            </ul>

            <Typography variant="h3">Subjects Joined by "or" or "nor"</Typography>
            <p>The verb agrees with the nearest subject.</p>
            <ul className="list-disc list-inside">
                <li>Either the teacher or the students are wrong.</li>
                <li>Neither the boys nor the girl is here.</li>
            </ul>

            <Typography variant="h3">Uncountable Nouns</Typography>
            <ul className="list-disc list-inside">
                <li>Water boils at 100°C.</li>
                <li>Rice takes time to cook.</li>
                <li>Honesty is important.</li>
            </ul>

            <Typography variant="h3">Collective Nouns</Typography>
            <p>Use singular verb if the group acts as one. Use plural verb if the members act separately.</p>
            <ul className="list-disc list-inside">
                <li>The team is winning.</li>
                <li>The family lives in Lahore.</li>
                <li>The team are arguing with each other.</li>
            </ul>

            <Typography variant="h3">Indefinite Pronouns</Typography>
            <p>Most are singular, some are plural.</p>
            <ul className="list-disc list-inside">
                <li>Everyone is happy.</li>
                <li>Somebody was knocking.</li>
                <li>Many are missing.</li>
                <li>Few know the truth.</li>
            </ul>

            <Typography variant="h3">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>He walk to school. → He walks to school.</li>
                <li>They eats lunch. → They eat lunch.</li>
                <li>My friend and brother is here. → My friend and brother are here.</li>
                <li>Neither of them are ready. → Neither of them is ready.</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Subject-Verb Agreement helps you write correct and professional English. Always check the subject and match it with the right verb form. Keep practicing and you’ll master it step by step!</p>
        </div>
    );
}
