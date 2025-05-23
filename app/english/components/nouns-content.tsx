import Typography from "@/components/ui/typography";

export default function NounsContent() {
    return (
        <div className="space-y-6  leading-7">
            <Typography variant="h3">What is a Noun?</Typography>
            <p>A noun is a word that names something. It can be the name of a person, place, thing, or idea.</p>
            <p>You can touch, see, feel, or think about the thing a noun describes.</p>

            <Typography variant="h4">Examples</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>Person: teacher, Ali, doctor</li>
                <li>Place: school, Pakistan, market</li>
                <li>Thing: book, apple, pen</li>
                <li>Idea: love, happiness, honesty</li>
            </ul>

            <Typography variant="h4">Types of Nouns</Typography>
            <p>Let’s understand the main types of nouns one by one:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    <strong>Common Noun:</strong> A general name of a person, place, or thing.
                    <br />Examples: boy, girl, city, car, fruit
                </li>
                <li>
                    <strong>Proper Noun:</strong> A special name. Always starts with a capital letter.
                    <br />Examples: Waqar, Lahore, Toyota, Quran
                </li>
                <li>
                    <strong>Concrete Noun:</strong> Can be seen, touched, heard, smelled, or tasted.
                    <br />Examples: apple, chair, dog, music
                </li>
                <li>
                    <strong>Abstract Noun:</strong> Ideas or feelings. Cannot be touched.
                    <br />Examples: happiness, anger, bravery, knowledge
                </li>
                <li>
                    <strong>Collective Noun:</strong> A group of people or things.
                    <br />Examples: team, class, flock
                </li>
                <li>
                    <strong>Countable Noun:</strong> Nouns you can count.
                    <br />Examples: apples, books, pens
                </li>
                <li>
                    <strong>Uncountable Noun:</strong> Nouns you cannot count easily.
                    <br />Examples: milk, sugar, water, air
                </li>
            </ol>

            <Typography variant="h4">Examples in Sentences</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>My teacher gave me a book. (Common Nouns)</li>
                <li>Ali lives in Karachi. (Proper Nouns)</li>
                <li>She showed great kindness to the poor. (Abstract Noun)</li>
                <li>The team won the match. (Collective Noun)</li>
                <li>I bought three mangoes. (Countable Noun)</li>
                <li>I drank a glass of milk. (Uncountable Noun)</li>
            </ul>

            <Typography variant="h4">How to Identify a Noun</Typography>
            <p>Ask these questions:</p>
            <ul className="list-disc list-inside">
                <li>What is it?</li>
                <li>Who is it?</li>
                <li>Where is it?</li>
                <li>Example: “The dog is barking.” → What is barking? → dog → noun</li>
            </ul>

            <Typography variant="h4">Noun and Grammar Rules</Typography>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    <strong>Plural Nouns:</strong> Add <code>s</code> or <code>es</code> for more than one. <br />
                    Examples: cat → cats, box → boxes
                </li>
                <li>
                    <strong>Possessive Nouns:</strong> Show ownership using <code>’s</code> or <code>’</code>. <br />
                    Examples: Waqar’s book, Girls’ room
                </li>
                <li>
                    <strong>Noun as Subject:</strong> Does the action. <br />
                    Example: Ali plays football. (Ali = subject)
                </li>
                <li>
                    <strong>Noun as Object:</strong> Receives the action. <br />
                    Example: She reads a book. (book = object)
                </li>
            </ol>

            <Typography variant="h4">Tips to Remember</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>Nouns name things.</li>
                <li>They can be common, proper, countable, uncountable, abstract, or concrete.</li>
                <li>A noun can be a subject, object, or show possession.</li>
            </ul>


            <Typography variant="h4">Conclusion</Typography>
            <p>Nouns are very important in English. Every sentence you speak or write usually has a noun. Once you understand nouns, your English will improve fast!</p>
        </div>
    );
}
