"use client";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Landmark, BookOpenText } from "lucide-react";
import Link from "next/link";



const sections = [
    {
        label: "Ministries",
        href: "/ministries",
        icon: Landmark,
        color: "text-purple-600",

    },

    {
        label: "Vocabulary",
        href: "/vocabulary",
        icon: BookOpenText,
        color: "text-rose-600",

    },

];



export default function BrowseSections() {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-8 space-y-12">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Sections
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"> */}

                {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <Card
                            key={section.href}
                            // className="bg-green-50 transition rounded-xl border-none shadow-sm"
                            className="bg-muted transition rounded-xl border border-border shadow-sm"
                        >
                            <CardContent className="p-5">
                                <Link
                                    href={section.href}
                                    // className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                                    className="flex items-center gap-3 font-medium text-primary underline underline-offset-2"

                                >
                                    <Icon className={`w-5 h-5 ${section.color}`} />
                                    {section.label}
                                </Link>
                            </CardContent>
                        </Card>
                    );
                })}

            </div>
        </div>
    );
}
