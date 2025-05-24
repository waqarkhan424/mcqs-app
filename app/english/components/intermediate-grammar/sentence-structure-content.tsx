import Typography from "@/components/ui/typography";

export default function SentenceStructureContent() {
    return (
        <div className="space-y-6 leading-7">

            <Typography variant="h3">What is a Sentence?</Typography>
            <p>A sentence is a group of words that gives a complete meaning. It always starts with a capital letter, ends with punctuation, and has a subject and a verb.</p>
            <ul className="list-disc list-inside">
                <li>I am learning English.</li>
                <li>She is a teacher.</li>
                <li>Are you coming?</li>
            </ul>

            <Typography variant="h3">Parts of a Sentence</Typography>
            <p>There are two main parts of every sentence:</p>
            <ul className="list-disc list-inside">
                <li><strong>Subject</strong> – who or what the sentence is about</li>
                <li><strong>Predicate</strong> – what is said about the subject</li>
            </ul>
            <p>Example: <strong>Ali</strong> plays cricket. / <strong>The cat</strong> is sleeping.</p>

            <Typography variant="h3">Basic Sentence Structure (S + V + O)</Typography>
            <p>Most English sentences follow this order: Subject + Verb + Object</p>
            <ul className="list-disc list-inside">
                <li>I eat rice.</li>
                <li>She writes letters.</li>
                <li>We play games.</li>
            </ul>

            <Typography variant="h3">Other Elements in a Sentence</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Adjectives</strong> – describe nouns (e.g., red car)</li>
                <li><strong>Adverbs</strong> – describe verbs (e.g., runs fast)</li>
                <li><strong>Prepositions</strong> – show time/place (e.g., on the table)</li>
                <li><strong>Conjunctions</strong> – join ideas (e.g., and, but)</li>
            </ul>

            <Typography variant="h3">Types of Sentences by Structure</Typography>

            <Typography variant="h3">Simple Sentence</Typography>
            <p>One complete idea with one subject and one verb.</p>
            <ul className="list-disc list-inside">
                <li>I like apples.</li>
                <li>She sings.</li>
            </ul>

            <Typography variant="h3">Compound Sentence</Typography>
            <p>Two simple sentences joined with conjunctions (and, but, so).</p>
            <ul className="list-disc list-inside">
                <li>I wanted tea, but I drank coffee.</li>
                <li>He studied hard, and he passed the exam.</li>
            </ul>

            <Typography variant="h3">Complex Sentence</Typography>
            <p>Main sentence with a dependent clause using words like because, when, if.</p>
            <ul className="list-disc list-inside">
                <li>I went to school because it was Monday.</li>
                <li>When she called, I was sleeping.</li>
            </ul>

            <Typography variant="h3">Compound-Complex Sentence</Typography>
            <p>Two or more main ideas with one or more dependent parts.</p>
            <ul className="list-disc list-inside">
                <li>I like pizza, and I eat it often because it’s delicious.</li>
            </ul>

            <Typography variant="h3">Common Sentence Patterns</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Pattern</th>
                        <th className="border px-4 py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">S + V</td><td className="border px-4 py-2">Birds fly.</td></tr>
                    <tr><td className="border px-4 py-2">S + V + O</td><td className="border px-4 py-2">I read books.</td></tr>
                    <tr><td className="border px-4 py-2">S + V + Adj</td><td className="border px-4 py-2">She is happy.</td></tr>
                    <tr><td className="border px-4 py-2">S + V + Adv</td><td className="border px-4 py-2">He runs fast.</td></tr>
                    <tr><td className="border px-4 py-2">S + V + O + O</td><td className="border px-4 py-2">He gave me a gift.</td></tr>
                    <tr><td className="border px-4 py-2">S + V + O + Adj</td><td className="border px-4 py-2">They painted the wall red.</td></tr>
                </tbody>
            </table>

            <Typography variant="h3">Word Order Rules</Typography>
            <p>Always follow this order: Subject → Verb → Object → Extra Info</p>
            <ul className="list-disc list-inside">
                <li>Correct: She likes tea in the morning.</li>
                <li>Wrong: Likes tea she in the morning.</li>
            </ul>

            <Typography variant="h3">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>Putting the verb before the subject (except in questions)</li>
                <li>Using too many unnecessary words</li>
                <li>Mixing different tenses in one sentence</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Good sentence structure makes your English clear and easy to understand. Start with simple forms and grow your confidence step by step. Practice daily and enjoy the process!</p>
        </div>
    );
}
