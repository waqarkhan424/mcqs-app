import Typography from "@/components/ui/typography";

export default function PronounsContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is a Pronoun?</Typography>
            <p>A pronoun is a word that we use instead of a noun. It helps us avoid repeating the same noun again and again.</p>

            <Typography variant="h4">Example</Typography>
            <p><strong>Without pronoun:</strong> Ali is a student. Ali is hardworking.</p>
            <p><strong>With pronoun:</strong> Ali is a student. <strong>He</strong> is hardworking.</p>
            <p>“He” is a pronoun that replaces “Ali”.</p>

            <Typography variant="h4">Why Do We Use Pronouns?</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>To make sentences shorter and smoother</li>
                <li>To avoid repeating names or things again and again</li>
                <li>To make speaking and writing easier</li>
            </ul>

            <Typography variant="h4">Common Pronouns in English</Typography>
            <p>Here are some common pronouns:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>I, you, he, she, it, we, they</li>
                <li>me, him, her, us, them</li>
                <li>mine, yours, his, hers, ours, theirs</li>
                <li>myself, yourself, himself, herself, itself, ourselves, themselves</li>
                <li>who, whom, which, that</li>
            </ul>

            <Typography variant="h4">Types of Pronouns</Typography>

            <Typography variant="h4">Personal Pronouns</Typography>
            <p>These show who is doing the action or receiving the action.</p>
            <p><strong>Subject Pronouns:</strong> I, you, he, she, it, we, they</p>
            <ul className="list-disc list-inside">
                <li>She is singing.</li>
                <li>They are my friends.</li>
            </ul>
            <p><strong>Object Pronouns:</strong> me, you, him, her, it, us, them</p>
            <ul className="list-disc list-inside">
                <li>He called me.</li>
                <li>We saw them at the park.</li>
            </ul>

            <Typography variant="h4">Possessive Pronouns</Typography>
            <p>These show ownership.</p>
            <ul className="list-disc list-inside">
                <li>This book is mine.</li>
                <li>That pen is hers.</li>
            </ul>

            <Typography variant="h4">Reflexive Pronouns</Typography>
            <p>Used when subject and object are the same.</p>
            <ul className="list-disc list-inside">
                <li>I made it myself.</li>
                <li>He hurt himself.</li>
            </ul>

            <Typography variant="h4">Demonstrative Pronouns</Typography>
            <p>Used to point to something.</p>
            <ul className="list-disc list-inside">
                <li>This is my bag.</li>
                <li>Those are old books.</li>
            </ul>

            <Typography variant="h4">Relative Pronouns</Typography>
            <p>Connect parts of a sentence.</p>
            <ul className="list-disc list-inside">
                <li>The boy who won the race is my friend.</li>
                <li>This is the book that I like.</li>
            </ul>

            <Typography variant="h4">Interrogative Pronouns</Typography>
            <p>Used to ask questions.</p>
            <ul className="list-disc list-inside">
                <li>Who is knocking at the door?</li>
                <li>What is your name?</li>
            </ul>

            <Typography variant="h4">Indefinite Pronouns</Typography>
            <p>Refer to people or things in a general way.</p>
            <ul className="list-disc list-inside">
                <li>Someone is at the door.</li>
                <li>Everything is ready.</li>
            </ul>

            <Typography variant="h4">Summary Table</Typography>
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-sm border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border px-4 py-2">Type</th>
                            <th className="border px-4 py-2">Examples</th>
                            <th className="border px-4 py-2">Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Personal</td>
                            <td className="border px-4 py-2">I, you, he, her, us, them</td>
                            <td className="border px-4 py-2">Show who is acting or being acted on</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Possessive</td>
                            <td className="border px-4 py-2">mine, yours, his, ours</td>
                            <td className="border px-4 py-2">Show ownership</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Reflexive</td>
                            <td className="border px-4 py-2">myself, yourself, herself</td>
                            <td className="border px-4 py-2">Reflect back to the subject</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Demonstrative</td>
                            <td className="border px-4 py-2">this, that, these, those</td>
                            <td className="border px-4 py-2">Point to things</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Relative</td>
                            <td className="border px-4 py-2">who, that, which</td>
                            <td className="border px-4 py-2">Join parts of a sentence</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Interrogative</td>
                            <td className="border px-4 py-2">what, who, whom, which</td>
                            <td className="border px-4 py-2">Ask questions</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Indefinite</td>
                            <td className="border px-4 py-2">someone, nothing, everyone</td>
                            <td className="border px-4 py-2">Talk about general people or things</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <Typography variant="h4">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>Don’t confuse <code>your</code> and <code>you’re</code></li>
                <li>Say “Ali and I went...” not “Me and Ali went...”</li>
                <li>Don’t use reflexive pronouns as objects unnecessarily (e.g., “She gave myself a gift” is wrong)</li>
            </ul>

            <Typography variant="h4">Final Thoughts</Typography>
            <p>Pronouns make our sentences smoother and clearer. Keep practicing and you will become more confident in using them correctly.</p>
        </div>
    );
}
