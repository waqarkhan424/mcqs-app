import { get_ministries } from "../actions/get_ministries";
import Typography from "@/components/ui/typography";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

export default async function MinistriesPage() {
    const ministries = await get_ministries();

    return (
        <div className="max-w-xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center space-y-2">
                <Typography variant="h2">Ministries of Pakistan</Typography>
                <Typography variant="p" className="text-muted-foreground">
                    Tap a ministry to explore its departments and posts.
                </Typography>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
                {ministries.map((m) => (
                    <AccordionItem
                        key={m.slug}
                        value={m.slug}
                        className="border border-border rounded-md bg-muted"
                    >
                        <AccordionTrigger className="px-4 py-2 text-left font-medium text-sm text-primary">
                            {m.name}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-sm">
                            <Link
                                href={`/ministries/${m.slug}`}
                                className="underline text-blue-600 hover:text-blue-800"
                            >
                                View Departments →
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
