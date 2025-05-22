"use client";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Link from "next/link";


const sections = [
    {
        label: "Ministries",
        href: "/ministries",
    },
    {
        label: "English Grammar",
        href: "/english",
    },
];


export default function BrowseSections() {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-8 space-y-12">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Sections
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {sections.map((section) => (
                    <Card
                        key={section.href}
                        className="bg-green-50 transition rounded-xl border-none shadow-sm"
                    >
                        <CardContent className="p-5">
                            <Link
                                href={section.href}
                                className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                            >
                                {section.label}
                            </Link>
                        </CardContent>
                    </Card>
                ))}


            </div>
        </div>
    );
}
