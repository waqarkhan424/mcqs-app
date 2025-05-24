import Typography from "@/components/ui/typography";

export default function ArticlesContent() {
    return (
        <div className="space-y-6 leading-7 ">
            <Typography variant="h3">What is an Article?</Typography>
            <p>An article is a word used before a noun to show whether we are talking about something specific or general.</p>
            <p>There are only three articles in English: <strong>a</strong>, <strong>an</strong>, and <strong>the</strong>.</p>

            <Typography variant="h4">Types of Articles</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Indefinite Articles</strong>: a, an — used for general things</li>
                <li><strong>Definite Article</strong>: the — used for specific things</li>
            </ul>

            <Typography variant="h4">Using “a” and “an” (Indefinite Articles)</Typography>
            <p><strong>Use "a"</strong> before words that start with a consonant sound:</p>
            <ul className="list-disc list-inside">
                <li>a book</li>
                <li>a cat</li>
                <li>a university (sounds like “you”)</li>
            </ul>
            <p><strong>Use "an"</strong> before words that start with a vowel sound:</p>
            <ul className="list-disc list-inside">
                <li>an apple</li>
                <li>an egg</li>
                <li>an hour (the “h” is silent)</li>
            </ul>
            <p><em>Tip: Focus on the <strong>sound</strong>, not just the letter.</em></p>

            <Typography variant="h4">Using “the” (Definite Article)</Typography>
            <p>Use "the" when the listener or reader knows what you are talking about, or when something is unique.</p>
            <ul className="list-disc list-inside">
                <li>The sun is bright.</li>
                <li>I saw the girl you were talking about.</li>
                <li>Please open the door.</li>
                <li>We went to the market yesterday.</li>
            </ul>

            <Typography variant="h4">More Examples</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Article</th>
                        <th className="border px-4 py-2">Example Sentence</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">a</td>
                        <td className="border px-4 py-2">I saw a dog in the street.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">an</td>
                        <td className="border px-4 py-2">He ate an egg.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">the</td>
                        <td className="border px-4 py-2">The dog barked at me.</td>
                    </tr>
                </tbody>
            </table>

            <Typography variant="h4">When Not to Use Articles</Typography>
            <ul className="list-disc list-inside">
                <li>Before plural or uncountable nouns when speaking generally: Books are useful. Water is important.</li>
                <li>Before most countries, cities, and languages: She lives in Pakistan. He speaks English.</li>
                <li>Before meals, days, and months (when speaking generally): We eat breakfast at 8. I was born in July.</li>
            </ul>

            <Typography variant="h4">Quick Rules to Remember</Typography>
            <ul className="list-disc list-inside">
                <li>Use "a" before consonant sounds: a pen, a car</li>
                <li>Use "an" before vowel sounds: an apple, an hour</li>
                <li>Use "the" for specific or known things: the sun, the moon</li>
                <li>Don’t use any article for general ideas: I love music, She drinks water</li>
            </ul>

            <Typography variant="h4">Common Mistakes with Articles</Typography>
            <ul className="list-disc list-inside">
                <li>I saw an university. → I saw a university.</li>
                <li>She is an honest girl. (Correct – “h” is silent)</li>
                <li>I read a Quran. → I read the Quran.</li>
            </ul>


            <Typography variant="h4">Final Thoughts</Typography>
            <p>Articles are small but important parts of English. Keep practicing “a,” “an,” and “the” in your daily reading and writing. You’ll get better every day!</p>
        </div>
    );
}