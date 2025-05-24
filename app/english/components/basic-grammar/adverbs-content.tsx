import Typography from "@/components/ui/typography";

export default function AdverbsContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is an Adverb?</Typography>
            <p>An adverb is a word that gives more information about a verb, an adjective, or another adverb.</p>
            <p>In simple words: An adverb tells us how, when, where, or to what extent something happens.</p>

            <Typography variant="h4">Examples of Adverbs</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>He runs quickly.</li>
                <li>She will come soon.</li>
                <li>The child is playing outside.</li>
                <li>I am very happy.</li>
            </ul>

            <Typography variant="h4">What Do Adverbs Do?</Typography>
            <ul className="list-disc list-inside">
                <li>They describe verbs: He sings loudly.</li>
                <li>They describe adjectives: It’s a very cold day.</li>
                <li>They describe other adverbs: She answered quite confidently.</li>
            </ul>

            <Typography variant="h4">Types of Adverbs</Typography>

            <Typography variant="h4">Adverbs of Manner</Typography>
            <p>They describe how something happens.</p>
            <ul className="list-disc list-inside">
                <li>slowly, quickly, loudly, happily, well</li>
                <li>He walks slowly.</li>
                <li>She smiled happily.</li>
            </ul>

            <Typography variant="h4">Adverbs of Time</Typography>
            <p>They tell us when something happens.</p>
            <ul className="list-disc list-inside">
                <li>now, later, soon, yesterday, today, tomorrow</li>
                <li>I will go tomorrow.</li>
                <li>She called me yesterday.</li>
            </ul>

            <Typography variant="h4">Adverbs of Place</Typography>
            <p>They tell us where something happens.</p>
            <ul className="list-disc list-inside">
                <li>here, there, inside, outside, nearby</li>
                <li>The kids are playing outside.</li>
                <li>Come here.</li>
            </ul>

            <Typography variant="h4">Adverbs of Frequency</Typography>
            <p>They tell us how often something happens.</p>
            <ul className="list-disc list-inside">
                <li>always, often, sometimes, rarely, never</li>
                <li>I always eat breakfast.</li>
                <li>She never lies.</li>
            </ul>

            <Typography variant="h4">Adverbs of Degree</Typography>
            <p>They tell us how much or to what extent.</p>
            <ul className="list-disc list-inside">
                <li>very, quite, too, almost, enough</li>
                <li>He is very tired.</li>
                <li>She was too late.</li>
            </ul>

            <Typography variant="h4">How to Recognize an Adverb</Typography>
            <p>Many adverbs (not all) end in -ly: quickly, slowly, happily, sadly, softly</p>
            <p>But not all -ly words are adverbs. Example: "friendly" is an adjective.</p>

            <Typography variant="h4">Where Do We Put Adverbs?</Typography>
            <ul className="list-disc list-inside">
                <li>Before or after the verb: She quickly ran to school. / He speaks clearly.</li>
                <li>At the beginning or end of a sentence: Tomorrow, we will leave. / We will leave tomorrow.</li>
                <li>Before adjectives or adverbs: It’s a very nice day. / She runs quite fast.</li>
            </ul>

            <Typography variant="h4">Common Mistakes with Adverbs</Typography>
            <ul className="list-disc list-inside">
                <li>He speaks good. → He speaks well.</li>
                <li>She dances beautiful. → She dances beautifully.</li>
                <li>I did it very perfectly. → I did it perfectly.</li>
            </ul>


            <Typography variant="h4">Final Thoughts</Typography>
            <p>Adverbs are helpful little words. They give your sentences more meaning and detail. Practice using them to improve your English step by step.</p>
        </div>
    );
}