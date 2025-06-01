import { add_vocabulary } from "../actions/add_vocabulary";

export default function VocabularyUploadPage() {
    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Vocabulary Word</h1>

            <form action={add_vocabulary} className="space-y-4">
                <input
                    name="word"
                    required
                    placeholder="Word"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    name="definition"
                    required
                    placeholder="Definition (English)"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    name="urduMeaning"
                    required
                    placeholder="Urdu Meaning"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    name="example"
                    required
                    placeholder="Example Sentence"
                    className="w-full border p-2 rounded"
                />
                <input
                    name="topic"
                    required
                    placeholder="Topic (e.g. essential-words)"
                    className="w-full border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
