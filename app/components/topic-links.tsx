"use client";

import Link from "next/link";
import slugify from "slugify";

export default function TopicLinks({ category, topics }: { category: string, topics: string[] }) {

    return (
        <div className="space-y-3">
            {/* <ol className="list-decimal pl-5 space-y-1"> */}
            <ol className="list-decimal pl-5 space-y-3">
                {topics.map((topic, idx) => (
                    <li key={idx}>

                        <Link
                            href={`/category/${category}/${slugify(topic, { lower: true, strict: true })}`}
                            className="text-primary underline font-medium hover:text-primary/90"

                        >
                            {topic}
                        </Link>

                    </li>
                ))}
            </ol>
        </div>
    );
}
