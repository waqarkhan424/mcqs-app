"use client";

import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import slugify from "slugify";

interface Props {
    slug: string;
    decodedTopic: string;
    originalTopics: string[];
}

export default function RelatedTopicsAccordion({
    slug,
    decodedTopic,
    originalTopics,
}: Props) {
    const [open, setOpen] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("related-topics-open");
        if (saved === "true") {
            setOpen(["related-topics"]);
        }
    }, []);

    const handleValueChange = (values: string[]) => {
        setOpen(values);
        localStorage.setItem("related-topics-open", values.includes("related-topics").toString());
    };

    return (
        <Accordion
            type="multiple"
            className="w-full mt-4 mb-4"
            value={open}
            onValueChange={handleValueChange}
        >
            <AccordionItem value="related-topics">
                <AccordionTrigger
                    className={cn(
                        "bg-muted text-primary w-full px-4 py-2 rounded-md font-semibold flex justify-between items-center"
                    )}
                >
                    <span>Related Topics</span>
                </AccordionTrigger>

                <AccordionContent className="bg-white rounded-md mt-2 border border-muted px-4 py-2">
                    <ol className="space-y-2 text-sm sm:text-base list-decimal pl-5">
                        {originalTopics.map((t) => {
                            const topicSlug = slugify(t, { lower: true, strict: true });
                            const isActive = topicSlug === decodedTopic;

                            return (
                                <li key={t} className="leading-relaxed">
                                    <Link
                                        href={`/category/${slug}/${topicSlug}`}
                                        className={cn(
                                            "transition-colors hover:underline block",
                                            isActive
                                                ? "text-foreground"
                                                : "text-primary hover:text-primary/90"
                                        )}
                                    >
                                        {t}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
