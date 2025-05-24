import Typography from "@/components/ui/typography";

export default function ActivePassiveContent() {
    return (
        <div className="space-y-6 leading-7">
            <Typography variant="h3">What is Voice in Grammar?</Typography>
            <p>In English, voice shows whether the subject of a sentence is doing the action or receiving the action.</p>
            <p>There are two types of voice:</p>
            <ul className="list-disc list-inside">
                <li>Active Voice</li>
                <li>Passive Voice</li>
            </ul>

            <Typography variant="h3">What is Active Voice?</Typography>
            <p>In Active Voice, the subject does the action.</p>
            <p><strong>Structure:</strong> Subject + Verb + Object</p>
            <ul className="list-disc list-inside">
                <li>The teacher teaches English.</li>
                <li>He wrote a letter.</li>
                <li>She is cooking dinner.</li>
            </ul>

            <Typography variant="h3">What is Passive Voice?</Typography>
            <p>In Passive Voice, the subject receives the action.</p>
            <p><strong>Structure:</strong> Object + Helping Verb (be) + Past Participle + by + Subject</p>
            <ul className="list-disc list-inside">
                <li>English is taught by the teacher.</li>
                <li>A letter was written by him.</li>
                <li>Dinner is being cooked by her.</li>
            </ul>

            <Typography variant="h3">Why Do We Use Passive Voice?</Typography>
            <ul className="list-disc list-inside">
                <li>The doer is unknown or not important</li>
                <li>Focus is on the action or the result</li>
            </ul>
            <ul className="list-disc list-inside">
                <li>The window was broken.</li>
                <li>The road is cleaned every day.</li>
            </ul>

            <Typography variant="h3">How to Change Active to Passive Voice</Typography>
            <ul className="list-disc list-inside">
                <li>Step 1: Find Subject, Verb, and Object</li>
                <li>Step 2: Move the object to the front</li>
                <li>Step 3: Use the correct form of the verb “be” + past participle</li>
                <li>Step 4: Add “by” + original subject (optional)</li>
            </ul>

            <Typography variant="h3">Example Transformations (Different Tenses)</Typography>
            <ul className="list-disc list-inside">
                <li>Simple Present: She writes a story. → A story is written by her.</li>
                <li>Present Continuous: He is cleaning the room. → The room is being cleaned by him.</li>
                <li>Present Perfect: They have finished the work. → The work has been finished by them.</li>
                <li>Simple Past: The chef cooked a meal. → A meal was cooked by the chef.</li>
                <li>Past Continuous: She was painting the wall. → The wall was being painted by her.</li>
                <li>Future Simple: He will complete the project. → The project will be completed by him.</li>
                <li>Modal Verbs: You should follow the rules. → The rules should be followed.</li>
            </ul>

            <Typography variant="h3">Important Rules</Typography>
            <ul className="list-disc list-inside">
                <li>Only transitive verbs (verbs with an object) can be changed to passive.</li>
                <li>Always use the past participle form of the verb in passive voice.</li>
                <li>The verb “be” changes based on the tense.</li>
            </ul>

            <Typography variant="h3">Common Mistakes</Typography>
            <ul className="list-disc list-inside">
                <li>A story is write by her. → A story is written by her.</li>
                <li>The cake was bake by the chef. → The cake was baked by the chef.</li>
                <li>The book is read by he. → The book is read by him.</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Use Active Voice when the doer is important. Use Passive Voice when the focus is on the action or the receiver. Keep practicing to become more confident in both forms!</p>
        </div>
    );
}
