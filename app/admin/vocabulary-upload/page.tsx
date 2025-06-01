// import { add_vocabulary } from "../actions/add_vocabulary";

// export default function VocabularyUploadPage() {
//     return (
//         <div className="max-w-xl mx-auto px-4 py-10">
//             <h1 className="text-2xl font-bold mb-6 text-center">Add Vocabulary Word</h1>

//             <form action={add_vocabulary} className="space-y-4">
//                 <input
//                     name="word"
//                     required
//                     placeholder="Word"
//                     className="w-full border p-2 rounded"
//                 />
//                 <textarea
//                     name="definition"
//                     required
//                     placeholder="Definition (English)"
//                     className="w-full border p-2 rounded"
//                 />
//                 <textarea
//                     name="urduMeaning"
//                     required
//                     placeholder="Urdu Meaning"
//                     className="w-full border p-2 rounded"
//                 />
//                 <textarea
//                     name="example"
//                     required
//                     placeholder="Example Sentence"
//                     className="w-full border p-2 rounded"
//                 />
//                 <input
//                     name="topic"
//                     required
//                     placeholder="Topic (e.g. essential-words)"
//                     className="w-full border p-2 rounded"
//                 />
//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }


///////////////////////////////////////////////


"use client";

import { useState } from "react";
import { add_bulk_vocabulary } from "../actions/add_bulk_vocabulary";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";

export default function VocabularyUploadPage() {
    const [input, setInput] = useState("");
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        await add_bulk_vocabulary(formData);
        setLoading(false);
        setInput("");
        setTopic("");
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <Typography variant="h2" className="text-center mb-4">Bulk Vocabulary Uploader</Typography>
            <form action={handleSubmit} className="space-y-4">
                <textarea
                    name="bulkData"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Paste vocabulary like this:\n\nBurn\nTo be on fire or be damaged by fire.\nجلنا / آگ لگنا\nThe paper will burn if you hold it near the flame.`}
                    rows={15}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic slug (e.g. essential-words)"
                    className="w-full border p-2 rounded"
                    required
                />
                <Button type="submit" disabled={loading}>
                    {loading ? "Uploading..." : "Submit Vocabulary"}
                </Button>
            </form>
        </div>
    );
}
