import Typography from "@/components/ui/typography";

export default function ConjunctionsContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is a Conjunction?</Typography>
            <p>A conjunction is a word that joins two or more words, phrases, or sentences. In simple words: A conjunction is a joining word.</p>

            <Typography variant="h4">Examples of Conjunctions</Typography>
            <ul className="list-disc list-inside">
                <li>Ali and Ahmed are friends.</li>
                <li>I was tired but happy.</li>
                <li>You can have tea or coffee.</li>
                <li>She stayed home because it was raining.</li>
            </ul>

            <Typography variant="h4">Why Are Conjunctions Important?</Typography>
            <ul className="list-disc list-inside">
                <li>Combine ideas</li>
                <li>Avoid repetition</li>
                <li>Make sentences flow better</li>
            </ul>

            <Typography variant="h4">Types of Conjunctions</Typography>

            <Typography variant="h4">Coordinating Conjunctions</Typography>
            <p>They join equal parts of a sentence — two words, phrases, or independent sentences.</p>
            <p>FANBOYS: for, and, nor, but, or, yet, so</p>
            <ul className="list-disc list-inside">
                <li>I want pizza and pasta.</li>
                <li>She is smart but lazy.</li>
                <li>You can come now, or wait until evening.</li>
                <li>It was cold, so I wore a jacket.</li>
            </ul>

            <Typography variant="h4">Subordinating Conjunctions</Typography>
            <p>They join a dependent clause to an independent clause.</p>
            <p>Examples: because, if, although, when, while, since, until, unless, before, after</p>
            <ul className="list-disc list-inside">
                <li>She stayed home because she was sick.</li>
                <li>If it rains, we’ll cancel the picnic.</li>
                <li>I went to sleep after I finished my homework.</li>
            </ul>

            <Typography variant="h4">Correlative Conjunctions</Typography>
            <p>They come in pairs and work together.</p>
            <p>Examples: either...or, neither...nor, both...and, not only...but also</p>
            <ul className="list-disc list-inside">
                <li>Either you come now, or stay home.</li>
                <li>Both Ali and Ahmed are coming.</li>
                <li>She is not only smart but also kind.</li>
            </ul>

            <Typography variant="h4">How to Use Conjunctions</Typography>
            <ul className="list-disc list-inside">
                <li>Joining words: I like tea and coffee.</li>
                <li>Joining phrases: He ran into the room and out the door.</li>
                <li>Joining sentences: I was tired, but I finished the work.</li>
            </ul>

            <Typography variant="h4">Tips for Using Conjunctions</Typography>
            <ul className="list-disc list-inside">
                <li>Use a comma before conjunctions like and, but, or when joining full sentences.</li>
                <li>Don't use too many conjunctions in one sentence.</li>
                <li>Practice with short sentences and join them using conjunctions.</li>
            </ul>

            <Typography variant="h4">Common Mistakes with Conjunctions</Typography>
            <ul className="list-disc list-inside">
                <li>I want to go but I’m tired. → I want to go, but I’m tired.</li>
                <li>He is neither smart and hardworking. → He is neither smart nor hardworking.</li>
                <li>I will go if I will finish work. → I will go if I finish work.</li>
            </ul>



            <Typography variant="h4">Final Thoughts</Typography>
            <p>Conjunctions are small but powerful tools in English. They help you connect your ideas and speak in full, flowing sentences. Keep practicing, and you’ll be using conjunctions easily and confidently!</p>
        </div>
    );
}