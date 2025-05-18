
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Link from "next/link";




import {
    BookOpenText,
    Monitor,
    BookType,
    Landmark,
    Calculator,
    FlaskConical,
    Atom,
    MoonStar,
    Newspaper,
    BadgeCheck
} from "lucide-react";






const categories = [
    { key: "english", label: "English", icon: BookType, color: "text-pink-600" },
    { key: "general-knowledge", label: "General Knowledge", icon: BookOpenText, color: "text-yellow-600" },
    { key: "current-affairs", label: "Current Affairs", icon: Newspaper, color: "text-blue-600" },
    { key: "pakistan-studies", label: "Pakistan Studies", icon: Landmark, color: "text-red-600" },
    { key: "islamic-studies", label: "Islamic Studies", icon: MoonStar, color: "text-orange-600" },
    { key: "mathematics", label: "Mathematics", icon: Calculator, color: "text-purple-600" },
    { key: "everyday-science", label: "Everyday Science", icon: FlaskConical, color: "text-cyan-600" },
    { key: "computer", label: "Computer", icon: Monitor, color: "text-teal-600" },
    { key: "iq", label: "IQ / Logical Reasoning", icon: Atom, color: "text-indigo-600" },
];





const pastPapers = [
    { key: "fia", label: "FIA", icon: BadgeCheck, color: "text-green-600" },
    { key: "ib", label: "Intelligence Bureau", icon: BadgeCheck, color: "text-lime-500" },
    { key: "asf", label: "ASF", icon: BadgeCheck, color: "text-amber-500" },
    { key: "nab", label: "NAB", icon: BadgeCheck, color: "text-teal-600" },
    { key: "tehsildar", label: "Tehsildar", icon: BadgeCheck, color: "text-pink-500" },
    { key: "naib-tehsildar", label: "Naib Tehsildar", icon: BadgeCheck, color: "text-red-500" },
    { key: "punjab-police", label: "Punjab Police", icon: BadgeCheck, color: "text-blue-600" },
    { key: "kpk-police", label: "KPK Police", icon: BadgeCheck, color: "text-purple-600" },
    { key: "nadra", label: "NADRA", icon: BadgeCheck, color: "text-cyan-600" },
];




export default function CategoryLinks() {

    return (


        <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

            <div>
                <Typography variant="h2" className="mb-6 text-center">
                    Choose a Subject to Begin
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (

                            <Card key={cat.key} className="bg-yellow-50 transition rounded-xl border-none shadow-sm">
                                <CardContent className="p-5">
                                    <Link
                                        href={`/category/${cat.key}`}
                                        className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                                    >
                                        <Icon className={`w-5 h-5 ${cat.color}`} />
                                        {cat.label} MCQs
                                    </Link>
                                </CardContent>
                            </Card>

                        );
                    })}
                </div>
            </div>

            <div>
                <Typography variant="h2" className="mb-6 text-center">
                    Past Paper MCQs
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {pastPapers.map((paper) => {
                        const Icon = paper.icon;
                        return (

                            <Card key={paper.key} className="bg-blue-50 transition rounded-xl border-none shadow-sm">
                                <CardContent className="p-5">
                                    <Link
                                        href={`/category/${paper.key}`}
                                        className="flex items-center gap-3 font-medium text-blue-700 underline underline-offset-2"
                                    >
                                        <Icon className={`w-5 h-5 ${paper.color}`} />
                                        {paper.label}
                                    </Link>
                                </CardContent>
                            </Card>

                        );
                    })}
                </div>
            </div>

        </div>








    );
}
