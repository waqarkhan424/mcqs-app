// app/english/components/nouns-content.tsx
import Typography from "@/components/ui/typography";

export default function NounsContent() {
    return (
        <div className="space-y-4 text-[16px] leading-7 text-gray-800">
            <Typography variant="h3">What is a Noun?</Typography>
            <p>A noun is a word that names a person, place, thing, or idea.</p>

            <Typography variant="h4">Examples</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>Person: teacher, Ali, doctor</li>
                <li>Place: school, Pakistan, market</li>
                <li>Thing: book, apple, pen</li>
                <li>Idea: love, happiness, honesty</li>
            </ul>

            <Typography variant="h4">Types of Nouns</Typography>
            <ol className="list-decimal list-inside space-y-1">
                <li><strong>Common Noun:</strong> boy, girl, city</li>
                <li><strong>Proper Noun:</strong> Lahore, Waqar</li>
                <li><strong>Abstract Noun:</strong> honesty, bravery</li>
                <li><strong>Collective Noun:</strong> team, class</li>
            </ol>

            <Typography variant="h4">Quiz</Typography>
            <p>What is the noun in: “The dog is barking”?</p>
        </div>
    );
}
