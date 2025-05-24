import Typography from "@/components/ui/typography";

export default function ParallelismContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is Parallelism?</Typography>
            <p><strong>Parallelism</strong> means using the same grammatical structure in a sentence. It makes sentences easier to read and more balanced.</p>

            <Typography variant="h4">Why Use Parallelism?</Typography>
            <ul className="list-disc list-inside">
                <li>It makes your writing clear.</li>
                <li>It sounds smooth and professional.</li>
                <li>It helps the reader understand better.</li>
            </ul>

            <Typography variant="h4">Basic Idea of Parallelism</Typography>
            <p>When you list two or more actions, qualities, or items, they should follow the same pattern.</p>

            <Typography variant="h4">Examples (Correct and Incorrect)</Typography>
            <ul className="list-disc list-inside">
                <li><strong>Incorrect:</strong> She likes dancing, to swim, and biking.</li>
                <li><strong>Correct:</strong> She likes dancing, swimming, and biking.</li>
                <li><strong>Incorrect:</strong> He wanted to study, working, and travel.</li>
                <li><strong>Correct:</strong> He wanted to study, work, and travel.</li>
            </ul>

            <Typography variant="h4">Parallelism in Lists</Typography>
            <p>When making a list, make sure all items follow the same form.</p>
            <p><strong>Example:</strong></p>
            <ul className="list-disc list-inside">
                <li>Wrong: The job requires typing, speaking clearly, and you must arrive on time.</li>
                <li>Correct: The job requires typing, speaking clearly, and arriving on time.</li>
            </ul>

            <Typography variant="h4">Parallelism with Correlative Conjunctions</Typography>
            <p>Words like <strong>either...or</strong>, <strong>neither...nor</strong>, <strong>not only...but also</strong> should link parallel parts.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Incorrect: He is not only smart but also works hard.</li>
                <li>Correct: He is not only smart but also hardworking.</li>

                <li>Incorrect: She wants either to dance or singing.</li>
                <li>Correct: She wants either to dance or to sing.</li>
            </ul>

            <Typography variant="h4">Parallelism in Comparisons</Typography>
            <p>When comparing things, keep the structure the same.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Incorrect: Swimming is better than to jog.</li>
                <li>Correct: Swimming is better than jogging.</li>
            </ul>

            <Typography variant="h4">Parallelism in Clauses</Typography>
            <p>If a sentence has multiple clauses, they should have the same structure.</p>
            <p><strong>Example:</strong></p>
            <ul className="list-disc list-inside">
                <li>Incorrect: I like people who are honest and who work hard and helping others.</li>
                <li>Correct: I like people who are honest, who work hard, and who help others.</li>
            </ul>

            <Typography variant="h4">How to Check for Parallelism</Typography>
            <ul className="list-disc list-inside">
                <li>Look for lists or groups of words in a sentence.</li>
                <li>Make sure each item has the same form (all -ing, all base verb, all noun phrases, etc.).</li>
                <li>Read the sentence aloud. Does it sound smooth?</li>
            </ul>


            <Typography variant="h4">Final Thoughts</Typography>
            <p>Parallelism makes your English look polished and professional. It’s easy to learn if you keep practicing. Just remember: keep the forms the same!</p>
        </div>
    );
}
