import Typography from "@/components/ui/typography";

export default function ReportedSpeechContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is Reported Speech?</Typography>
            <p>
                <strong>Reported speech</strong> (also called indirect speech) is used
                when we tell someone what another person said. We don’t use the exact
                words, but we change them slightly.
            </p>

            <Typography variant="h4">Example:</Typography>
            <p>
                <strong>Direct Speech:</strong> She said, "I am tired."
                <br />
                <strong>Reported Speech:</strong> She said that she was tired.
            </p>

            <Typography variant="h4">Why Do We Use Reported Speech?</Typography>
            <ul className="list-disc list-inside">
                <li>To tell someone what another person said</li>
                <li>To report news or information</li>
                <li>To write or speak formally</li>
            </ul>

            <Typography variant="h4">Changes in Reported Speech</Typography>
            <p>When we change direct speech to reported speech, we usually:</p>
            <ul className="list-disc list-inside">
                <li>Change the pronouns</li>
                <li>Change the verb tense</li>
                <li>Remove quotation marks</li>
                <li>
                    Use reporting verbs like <em>said</em>, <em>told</em>, <em>asked</em>
                </li>
            </ul>

            <Typography variant="h4">1. Changing Pronouns</Typography>
            <p>
                <strong>Direct:</strong> He said, "I like this book."
                <br />
                <strong>Reported:</strong> He said that he liked that book.
            </p>

            <Typography variant="h4">2. Changing Tenses</Typography>
            <p>
                When the reporting verb is in the past, we usually move the tense one
                step back.
            </p>

            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Direct Speech</th>
                        <th className="border px-4 py-2">Reported Speech</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">am / is</td>
                        <td className="border px-4 py-2">was</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">are</td>
                        <td className="border px-4 py-2">were</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">do / does</td>
                        <td className="border px-4 py-2">did</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">will</td>
                        <td className="border px-4 py-2">would</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">have / has</td>
                        <td className="border px-4 py-2">had</td>
                    </tr>
                </tbody>
            </table>

            <Typography variant="h4">3. Changing Time and Place Words</Typography>
            <ul className="list-disc list-inside">
                <li>now → then</li>
                <li>today → that day</li>
                <li>tomorrow → the next day</li>
                <li>yesterday → the day before</li>
                <li>here → there</li>
            </ul>

            <Typography variant="h4">Examples:</Typography>
            <ul className="list-disc list-inside">
                <li>
                    Direct: She said, "I am going now." → Reported: She said that she was
                    going then.
                </li>
                <li>
                    Direct: He said, "I will go tomorrow." → Reported: He said that he
                    would go the next day.
                </li>
            </ul>

            <Typography variant="h4">Using "Said" and "Told"</Typography>
            <ul className="list-disc list-inside">
                <li>
                    We use <strong>said</strong> without a person: He said that he was
                    happy.
                </li>
                <li>
                    We use <strong>told</strong> with a person: He told me that he was
                    happy.
                </li>
            </ul>

            <Typography variant="h4">Reporting Questions</Typography>
            <p>
                For questions, we change the word order to a statement and remove the
                question mark.
            </p>

            <Typography variant="h4" className="text-base font-semibold">
                Yes/No Questions
            </Typography>
            <p>
                <strong>Direct:</strong> He asked, "Are you fine?"
                <br />
                <strong>Reported:</strong> He asked if I was fine.
            </p>

            <Typography variant="h4" className="text-base font-semibold">
                Wh- Questions
            </Typography>
            <p>
                <strong>Direct:</strong> She asked, "Where do you live?"
                <br />
                <strong>Reported:</strong> She asked where I lived.
            </p>

            <Typography variant="h4">Reporting Commands</Typography>
            <p>We use told or asked + to + verb.</p>
            <ul className="list-disc list-inside">
                <li>
                    Direct: The teacher said, "Sit down." → Reported: The teacher told us
                    to sit down.
                </li>
                <li>
                    Direct: She said, "Please help me." → Reported: She asked me to help
                    her.
                </li>
            </ul>

            <Typography variant="h4">Final Thoughts</Typography>
            <p>
                Reported speech helps us share what others said in a natural way. It may
                take some practice to remember the changes, but with time, it becomes
                easy. Keep practicing!
            </p>
        </div>
    );
}
