import Typography from "@/components/ui/typography";

export default function VerbsContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is a Verb?</Typography>
            <p>A verb is a word that shows an action or a state of being.</p>
            <p>In easy words: A verb tells us what someone is doing or what is happening.</p>

            <Typography variant="h4">Examples of Verbs</Typography>
            <ul className="list-disc list-inside">
                <li>Ali runs fast. (runs = action)</li>
                <li>She is happy. (is = state of being)</li>
                <li>They played football. (played = action in the past)</li>
            </ul>

            <Typography variant="h4">Why Are Verbs Important?</Typography>
            <p>You can’t make a sentence in English without a verb.</p>
            <p>They are the heart of every sentence. Verbs tell us what’s going on.</p>

            <Typography variant="h4">Types of Verbs (Explained Simply)</Typography>

            <Typography variant="h4">Action Verbs</Typography>
            <p>These verbs show something you can do or see being done.</p>
            <ul className="list-disc list-inside">
                <li>eat, run, write, jump, sleep, read</li>
            </ul>
            <p>Sentences:</p>
            <ul className="list-disc list-inside">
                <li>I eat rice.</li>
                <li>They play cricket.</li>
                <li>She writes beautifully.</li>
            </ul>

            <Typography variant="h4">Helping Verbs (Auxiliary Verbs)</Typography>
            <p>These verbs help the main verb. They show tense, possibility, or necessity.</p>
            <ul className="list-disc list-inside">
                <li>is, am, are, was, were, have, has, had, will, can, must, should</li>
            </ul>
            <p>Sentences:</p>
            <ul className="list-disc list-inside">
                <li>She is studying.</li>
                <li>I have finished my homework.</li>
                <li>You should go now.</li>
            </ul>

            <Typography variant="h4">Linking Verbs</Typography>
            <p>These verbs don’t show action. They connect the subject to more information.</p>
            <ul className="list-disc list-inside">
                <li>is, am, are, was, were, be, become, seem</li>
            </ul>
            <p>Sentences:</p>
            <ul className="list-disc list-inside">
                <li>She is a doctor.</li>
                <li>He seems tired.</li>
                <li>They are happy.</li>
            </ul>

            <Typography variant="h4">Verb Tenses – What is Time in a Sentence?</Typography>
            <p>Tense means the time of action. Is it happening now, before, or later?</p>

            <ul className="list-disc list-inside">
                <li><strong>Present Tense:</strong> I go to school. / She writes poems.</li>
                <li><strong>Past Tense:</strong> I went to school. / She wrote a poem.</li>
                <li><strong>Future Tense:</strong> I will go to school. / She will write a poem.</li>
            </ul>

            <Typography variant="h4">Regular and Irregular Verbs</Typography>

            <p><strong>Regular Verbs:</strong> They form the past by adding -ed.</p>
            <ul className="list-disc list-inside">
                <li>play → played</li>
                <li>jump → jumped</li>
                <li>clean → cleaned</li>
            </ul>

            <p><strong>Irregular Verbs:</strong> They change form completely.</p>
            <ul className="list-disc list-inside">
                <li>go → went</li>
                <li>eat → ate</li>
                <li>take → took</li>
            </ul>

            <Typography variant="h4">Forms of Verbs (Base, Past, Past Participle)</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border px-4 py-2">Base Verb</th>
                        <th className="border px-4 py-2">Past Tense</th>
                        <th className="border px-4 py-2">Past Participle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">go</td>
                        <td className="border px-4 py-2">went</td>
                        <td className="border px-4 py-2">gone</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">eat</td>
                        <td className="border px-4 py-2">ate</td>
                        <td className="border px-4 py-2">eaten</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">play</td>
                        <td className="border px-4 py-2">played</td>
                        <td className="border px-4 py-2">played</td>
                    </tr>
                </tbody>
            </table>

            <Typography variant="h4">Verb Usage in Sentences</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Verbs as Actions:</strong> She runs fast. / They cook dinner.</li>
                <li><strong>Verbs to Show Condition:</strong> I am happy. / He was sick.</li>
                <li><strong>Verbs with Helping Verbs:</strong> They have finished the test. / She is going to school.</li>
            </ul>

            <Typography variant="h4">Common Mistakes with Verbs</Typography>
            <ul className="list-disc list-inside">
                <li> “He go to school.” → He goes to school.</li>
                <li> “She have a pen.” → She has a pen.</li>
                <li> “They was late.” → They were late.</li>
                <li>Always match the verb form with the subject.</li>
            </ul>



            <Typography variant="h4">Final Thoughts</Typography>
            <p>Verbs are like the engine of a car—they make the sentence move. Once you understand verbs, you can build strong and correct English sentences. Keep practicing and you will improve!</p>
        </div>
    );
}
