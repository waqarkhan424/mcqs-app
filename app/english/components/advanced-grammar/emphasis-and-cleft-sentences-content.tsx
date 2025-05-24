import Typography from "@/components/ui/typography";

export default function EmphasisAndCleftSentencesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is Emphasis in English?</Typography>
            <p><strong>Emphasis</strong> means showing that a certain part of a sentence is important. We do this to highlight key ideas or to make our message stronger and clearer.</p>

            <Typography variant="h4">Ways to Show Emphasis</Typography>
            <ul className="list-disc list-inside">
                <li>Using stress or intonation (when speaking)</li>
                <li>Using specific words (like <em>really, very, indeed</em>)</li>
                <li>Changing word order</li>
                <li>Using special sentence structures, like cleft sentences</li>
            </ul>

            <Typography variant="h3">What are Cleft Sentences?</Typography>
            <p><strong>Cleft sentences</strong> are special sentence structures that help us give importance to one part of the sentence. "Cleft" means "split." So, we split a sentence into two parts to focus on a specific idea.</p>

            <Typography variant="h4">Types of Cleft Sentences</Typography>
            <ol className="list-decimal list-inside space-y-1">
                <li>It-cleft sentences</li>
                <li>What-cleft sentences</li>
                <li>All-cleft sentences</li>
                <li>Wh-cleft (where, when, why, etc.)</li>
            </ol>

            <Typography variant="h4">1. It-Cleft Sentences</Typography>
            <p>We start with <strong>"It is/was"</strong> to focus on one part of the sentence.</p>
            <p><strong>Structure:</strong> It + be + emphasized part + who/that + rest of the sentence</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Normal: John fixed the car.</li>
                <li>It-cleft: It was <strong>John</strong> who fixed the car.</li>
                <li>Normal: She called me yesterday.</li>
                <li>It-cleft: It was <strong>yesterday</strong> that she called me.</li>
            </ul>

            <Typography variant="h4">2. What-Cleft Sentences</Typography>
            <p>We begin the sentence with <strong>"What"</strong> to highlight an action or idea.</p>
            <p><strong>Structure:</strong> What + clause + is/was + emphasized part</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Normal: I need a break.</li>
                <li>What-cleft: What I need is <strong>a break</strong>.</li>
                <li>Normal: She loves dancing.</li>
                <li>What-cleft: What she loves is <strong>dancing</strong>.</li>
            </ul>

            <Typography variant="h4">3. All-Cleft Sentences</Typography>
            <p>We begin with <strong>"All"</strong> to stress that something is the only thing wanted or needed.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Normal: I just wanted some rest.</li>
                <li>All-cleft: All I wanted was <strong>some rest</strong>.</li>
                <li>Normal: He needed a chance to speak.</li>
                <li>All-cleft: All he needed was <strong>a chance to speak</strong>.</li>
            </ul>

            <Typography variant="h4">4. Wh-Cleft Sentences (Where, When, Why, etc.)</Typography>
            <p>We begin the sentence with a wh-word to highlight a time, place, reason, etc.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>Normal: She met him in the park.</li>
                <li>Wh-cleft: <strong>Where</strong> she met him was <strong>in the park</strong>.</li>
                <li>Normal: He left because he was tired.</li>
                <li>Wh-cleft: <strong>Why</strong> he left was <strong>because he was tired</strong>.</li>
            </ul>

            <Typography variant="h4">When to Use Cleft Sentences</Typography>
            <ul className="list-disc list-inside">
                <li>To add drama or focus</li>
                <li>To answer questions more clearly</li>
                <li>To write more formally or stylistically</li>
            </ul>


            <Typography variant="h4">Final Thoughts</Typography>
            <p>Using emphasis and cleft sentences can make your speaking and writing stronger and clearer. Don’t worry if it feels difficult at first. With practice, you’ll start using them naturally!</p>
        </div>
    );
}