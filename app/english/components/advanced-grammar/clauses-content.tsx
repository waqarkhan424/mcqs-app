import Typography from "@/components/ui/typography";

export default function ClausesContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is a Clause?</Typography>
            <p>A <strong>clause</strong> is a group of words that has a subject and a verb. It can be a full sentence or just part of a sentence.</p>

            <Typography variant="h4">Examples:</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li>She is reading.</li>
                <li>When he arrived</li>
                <li>Because I was tired</li>
            </ul>
            <p>All these have a subject (she, he, I) and a verb (is reading, arrived, was).</p>

            <Typography variant="h4">Types of Clauses</Typography>
            <p>There are two main types of clauses:</p>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>Independent Clause</strong></li>
                <li><strong>Dependent Clause</strong></li>
            </ul>

            <Typography variant="h4">1. Independent Clause</Typography>
            <p>This is a complete sentence. It can stand alone.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1">
                <li>I am hungry.</li>
                <li>She loves music.</li>
                <li>They are playing outside.</li>
            </ul>

            <Typography variant="h4">2. Dependent Clause</Typography>
            <p>This is not a complete sentence. It cannot stand alone. It needs an independent clause to make full sense.</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1">
                <li>Because I was tired</li>
                <li>When he arrived</li>
                <li>If you work hard</li>
            </ul>
            <p>These feel incomplete. We need more information.</p>

            <Typography variant="h4">Complete Sentences Using Dependent Clauses</Typography>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>Because I was tired</strong>, I went to bed early.</li>
                <li><strong>When he arrived</strong>, we started eating.</li>
                <li><strong>If you work hard</strong>, you will succeed.</li>
            </ul>

            <Typography variant="h4">Types of Dependent Clauses</Typography>
            <p>There are 3 common types of dependent clauses:</p>
            <ul className="list-disc list-inside">
                <li><strong>Adjective Clause</strong></li>
                <li><strong>Adverb Clause</strong></li>
                <li><strong>Noun Clause</strong></li>
            </ul>

            <Typography variant="h4">Adjective Clause</Typography>
            <p>This clause describes a noun, just like an adjective.</p>
            <p><strong>Usually starts with:</strong> who, whom, whose, which, that</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>The boy <strong>who is wearing a red cap</strong> is my brother.</li>
                <li>I met the woman <strong>who helped me</strong>.</li>
                <li>This is the book <strong>that I lost</strong>.</li>
            </ul>

            <Typography variant="h4">Adverb Clause</Typography>
            <p>This clause gives more information about the verb. It tells us how, when, where, or why.</p>
            <p><strong>Usually starts with:</strong> because, if, when, although, after, before, since, while</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li>I will call you <strong>when I reach home</strong>.</li>
                <li><strong>Because it was raining</strong>, we stayed inside.</li>
                <li><strong>If you are ready</strong>, we can start now.</li>
            </ul>

            <Typography variant="h4">Noun Clause</Typography>
            <p>This clause acts like a noun. It can be the subject or object in a sentence.</p>
            <p><strong>Usually starts with:</strong> what, that, who, why, whether, if</p>
            <p><strong>Examples:</strong></p>
            <ul className="list-disc list-inside">
                <li><strong>What you said</strong> made me happy. (subject)</li>
                <li>I don’t know <strong>why she left</strong>. (object)</li>
                <li>She told me <strong>that she was tired</strong>.</li>
            </ul>

            <Typography variant="h4">Important Tips</Typography>
            <ul className="list-disc list-inside">
                <li>Every sentence must have at least one clause.</li>
                <li>Independent clauses can stand alone.</li>
                <li>Dependent clauses need more to complete the meaning.</li>
                <li>Use commas after a dependent clause if it comes first in the sentence.</li>
            </ul>



            <Typography variant="h4">Final Thoughts</Typography>
            <p>Clauses are the building blocks of English sentences. If you understand them well, your writing and speaking will become much stronger and clearer.</p>
        </div>
    );
}