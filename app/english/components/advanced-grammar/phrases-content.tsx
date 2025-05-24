import Typography from "@/components/ui/typography";

export default function PhrasesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is a Phrase?</Typography>
            <p>A <strong>phrase</strong> is a group of words that work together but <strong>do not have both a subject and a verb</strong>. A phrase is not a complete sentence, but it adds meaning to a sentence.</p>

            <Typography variant="h4">Examples:</Typography>
            <ul className="list-disc list-inside">
                <li>in the morning</li>
                <li>on the table</li>
                <li>running fast</li>
                <li>the red car</li>
            </ul>
            <p>These groups of words give more detail, but they don’t have a subject doing an action.</p>

            <Typography variant="h4">Difference Between Phrase and Clause</Typography>
            <p><strong>Phrase:</strong> No subject and verb</p>
            <p><strong>Clause:</strong> Has subject and verb</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li><strong>Phrase:</strong> after the movie</li>
                <li><strong>Clause:</strong> After the movie ended</li>
            </ul>

            <Typography variant="h4">Types of Phrases</Typography>
            <p>Let’s learn the most common types of phrases in English.</p>

            <Typography variant="h4">1. Noun Phrase</Typography>
            <p>A noun phrase is a group of words that acts like a noun.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>The big house</li>
                <li>A glass of milk</li>
                <li>Her cute little dog</li>
            </ul>
            <p>These phrases act like a noun in a sentence.</p>

            <Typography variant="h4">2. Verb Phrase</Typography>
            <p>A verb phrase is made with the main verb and one or more helping (auxiliary) verbs.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>is running</li>
                <li>has been working</li>
                <li>will be coming</li>
            </ul>

            <Typography variant="h4">3. Adjective Phrase</Typography>
            <p>This type of phrase works like an adjective. It describes a noun.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>full of hope</li>
                <li>happy with his marks</li>
                <li>afraid of the dark</li>
            </ul>

            <Typography variant="h4">4. Adverb Phrase</Typography>
            <p>This phrase works like an adverb. It tells more about the verb (how, when, where, why).</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>very quickly</li>
                <li>in a few minutes</li>
                <li>with great care</li>
            </ul>

            <Typography variant="h4">5. Prepositional Phrase</Typography>
            <p>This type of phrase begins with a preposition and ends with a noun or pronoun.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>on the table</li>
                <li>under the bed</li>
                <li>between the trees</li>
            </ul>

            <Typography variant="h4">How Phrases Work in Sentences</Typography>
            <ul className="list-disc list-inside">
                <li>I saw <strong>a beautiful bird</strong>. (Noun Phrase)</li>
                <li>He is <strong>very tired</strong>. (Adjective Phrase)</li>
                <li>They walked <strong>with great care</strong>. (Adverb Phrase)</li>
                <li>The cat is <strong>under the table</strong>. (Prepositional Phrase)</li>
            </ul>



            <Typography variant="h4">Final Thoughts</Typography>
            <p>Phrases help make our sentences more interesting and detailed. Remember, a phrase does not have both a subject and a verb, but it still gives meaning. Practice using phrases in your daily writing to improve your English step by step.</p>
        </div>
    );
}
