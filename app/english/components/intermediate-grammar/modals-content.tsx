import Typography from "@/components/ui/typography";

export default function ModalsContent() {
    return (
        <div className="space-y-6 leading-7">

            <Typography variant="h3">What are Modals?</Typography>
            <p>Modals are helping verbs. They are used before the main verb in a sentence to give it more meaning. They do not change for different subjects and are always followed by the base form of the verb.</p>

            <Typography variant="h3">Common Modals</Typography>
            <p>can, could, may, might, will, would, shall, should, must, ought to</p>

            <Typography variant="h3">Basic Rules of Using Modals</Typography>
            <ul className="list-disc list-inside">
                <li>Modals come before the main verb: She <strong>can</strong> speak English.</li>
                <li>Modals are never used alone: He <strong>should go</strong> to the doctor.</li>
                <li>The verb after a modal is in base form: I <strong>must finish</strong> my homework.</li>
            </ul>

            <Typography variant="h3">Modals and Their Uses</Typography>

            <Typography variant="h3">Can – for ability or permission</Typography>
            <ul className="list-disc list-inside">
                <li>I can swim.</li>
                <li>Can I use your phone?</li>
            </ul>

            <Typography variant="h3">Could – for past ability or polite permission/request</Typography>
            <ul className="list-disc list-inside">
                <li>I could ride a bike when I was 5.</li>
                <li>Could you help me, please?</li>
            </ul>

            <Typography variant="h3">May – for permission or possibility</Typography>
            <ul className="list-disc list-inside">
                <li>May I come in?</li>
                <li>It may rain today.</li>
            </ul>

            <Typography variant="h3">Might – for less certain possibility</Typography>
            <ul className="list-disc list-inside">
                <li>It might snow later.</li>
                <li>She might come to the party.</li>
            </ul>

            <Typography variant="h3">Shall – used in suggestions or offers</Typography>
            <ul className="list-disc list-inside">
                <li>Shall we go out?</li>
                <li>I shall call you tomorrow.</li>
            </ul>

            <Typography variant="h3">Should – for advice or expectations</Typography>
            <ul className="list-disc list-inside">
                <li>You should eat healthy food.</li>
                <li>He should be here by now.</li>
            </ul>

            <Typography variant="h3">Will – to show future</Typography>
            <ul className="list-disc list-inside">
                <li>I will call you tonight.</li>
                <li>They will travel next week.</li>
            </ul>

            <Typography variant="h3">Would – for polite offers or past repeated actions</Typography>
            <ul className="list-disc list-inside">
                <li>Would you like some tea?</li>
                <li>When we were kids, we would play outside all day.</li>
            </ul>

            <Typography variant="h3">Must – for strong obligation or necessity</Typography>
            <ul className="list-disc list-inside">
                <li>You must wear a seatbelt.</li>
                <li>I must finish this work today.</li>
            </ul>

            <Typography variant="h3">Ought to – for moral duty or advice</Typography>
            <ul className="list-disc list-inside">
                <li>You ought to respect your parents.</li>
                <li>He ought to be more careful.</li>
            </ul>

            <Typography variant="h3">Summary Table</Typography>
            <table className="table-auto w-full text-sm border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Modal</th>
                        <th className="border px-4 py-2">Use</th>
                        <th className="border px-4 py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="border px-4 py-2">can</td><td className="border px-4 py-2">ability, permission</td><td className="border px-4 py-2">I can swim.</td></tr>
                    <tr><td className="border px-4 py-2">could</td><td className="border px-4 py-2">past ability, polite request</td><td className="border px-4 py-2">Could you help?</td></tr>
                    <tr><td className="border px-4 py-2">may</td><td className="border px-4 py-2">permission, possibility</td><td className="border px-4 py-2">It may rain.</td></tr>
                    <tr><td className="border px-4 py-2">might</td><td className="border px-4 py-2">possibility (less certain)</td><td className="border px-4 py-2">She might come.</td></tr>
                    <tr><td className="border px-4 py-2">shall</td><td className="border px-4 py-2">suggestion, future</td><td className="border px-4 py-2">Shall we go?</td></tr>
                    <tr><td className="border px-4 py-2">should</td><td className="border px-4 py-2">advice</td><td className="border px-4 py-2">You should study.</td></tr>
                    <tr><td className="border px-4 py-2">will</td><td className="border px-4 py-2">future</td><td className="border px-4 py-2">I will go.</td></tr>
                    <tr><td className="border px-4 py-2">would</td><td className="border px-4 py-2">polite offer, past habit</td><td className="border px-4 py-2">Would you like?</td></tr>
                    <tr><td className="border px-4 py-2">must</td><td className="border px-4 py-2">necessity</td><td className="border px-4 py-2">You must go.</td></tr>
                    <tr><td className="border px-4 py-2">ought to</td><td className="border px-4 py-2">moral duty</td><td className="border px-4 py-2">You ought to help.</td></tr>
                </tbody>
            </table>

            <Typography variant="h3">Common Mistakes to Avoid</Typography>
            <ul className="list-disc list-inside">
                <li>He can to swim. → He can swim.</li>
                <li>She must goes now. → She must go now.</li>
                <li>Would you helped me? → Would you help me?</li>
            </ul>

            <Typography variant="h3">Final Thoughts</Typography>
            <p>Modals help us speak clearly and politely. Practice them every day in different sentences. Soon, you will use them naturally with confidence!</p>
        </div>
    );
}
