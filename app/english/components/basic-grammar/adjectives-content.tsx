import Typography from "@/components/ui/typography";

export default function AdjectivesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is an Adjective?</Typography>
            <p>An adjective is a word that describes a noun or a pronoun. It tells us more about a person, place, thing, or idea.</p>
            <p>In very simple words: An adjective gives more information about a noun.</p>

            <Typography variant="h4">Examples of Adjectives</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>A big house</li>
                <li>A happy child</li>
                <li>An old car</li>
                <li>The blue sky</li>
                <li>A delicious cake</li>
            </ul>
            <p>In all the examples above, the adjectives (big, happy, old, blue, delicious) describe the nouns (house, child, car, sky, cake).</p>

            <Typography variant="h4">Why Do We Use Adjectives?</Typography>
            <ul className="list-disc list-inside">
                <li>To make our sentences more interesting and clear</li>
                <li>To describe how something looks, feels, tastes, smells, sounds, or behaves</li>
            </ul>

            <Typography variant="h4">Types of Adjectives</Typography>

            <Typography variant="h4">Descriptive Adjectives</Typography>
            <p>These describe a noun.</p>
            <p>Examples: tall, short, fast, slow, sweet, strong</p>
            <ul className="list-disc list-inside">
                <li>She has long hair.</li>
                <li>It’s a beautiful day.</li>
            </ul>

            <Typography variant="h4">Quantitative Adjectives</Typography>
            <p>These show how much or how many.</p>
            <p>Examples: some, many, few, ten, all</p>
            <ul className="list-disc list-inside">
                <li>I have three books.</li>
                <li>She ate some rice.</li>
            </ul>

            <Typography variant="h4">Demonstrative Adjectives</Typography>
            <p>They point to specific things.</p>
            <p>Examples: this, that, these, those</p>
            <ul className="list-disc list-inside">
                <li>This apple is fresh.</li>
                <li>I like those shoes.</li>
            </ul>

            <Typography variant="h4">Possessive Adjectives</Typography>
            <p>They show ownership or belonging.</p>
            <p>Examples: my, your, his, her, its, our, their</p>
            <ul className="list-disc list-inside">
                <li>That is my car.</li>
                <li>Their dog is friendly.</li>
            </ul>

            <Typography variant="h4">Interrogative Adjectives</Typography>
            <p>These are used to ask questions.</p>
            <p>Examples: which, what, whose</p>
            <ul className="list-disc list-inside">
                <li>Which dress do you like?</li>
                <li>Whose bag is this?</li>
            </ul>

            <Typography variant="h4">Comparative and Superlative Adjectives</Typography>
            <p>We use these to compare things.</p>

            <p><strong>Comparative:</strong> compare two things. Examples: taller, better, more beautiful</p>
            <p>Sentence: She is taller than her sister.</p>

            <p><strong>Superlative:</strong> compare three or more things. Examples: tallest, best, most beautiful</p>
            <p>Sentence: He is the tallest boy in the class.</p>

            <Typography variant="h4">Where Do We Place Adjectives?</Typography>
            <ul className="list-disc list-inside">
                <li>Usually before the noun: A green apple, A smart student</li>
                <li>Sometimes after the verb: The sky is blue. She looks tired.</li>
            </ul>

            <Typography variant="h4">Tips for Using Adjectives</Typography>
            <ul className="list-disc list-inside">
                <li>Do not use more and -er together: more taller → just taller</li>
                <li>Use adjectives to make your writing clear and colorful</li>
                <li>Avoid using too many adjectives in one sentence</li>
            </ul>

            <Typography variant="h4">Common Mistakes with Adjectives</Typography>
            <ul className="list-disc list-inside">
                <li>She is more smarter than me. → She is smarter than me.</li>
                <li>I saw two bigs dogs. → I saw two big dogs.</li>
                <li>This cake is the most deliciousest. → This cake is the most delicious.</li>
            </ul>

            <Typography variant="h4">Final Thoughts</Typography>
            <p>Adjectives are small words, but they make a big difference in your English. Keep using and practicing them to make your English more expressive and clear!</p>
        </div>
    );
}
