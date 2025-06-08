"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
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
    BadgeCheck,
} from "lucide-react"

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
]

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
]

export default function CategoryLinks({ show = "subjects" }: { show: "subjects" | "past" }) {
    const list = show === "subjects" ? categories : pastPapers

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {list.map((item) => {
                const Icon = item.icon
                return (
                    <Card key={item.key} className={`${show === "past" ? "bg-primary/10" : "bg-accent/10"} border shadow-sm rounded-xl`}>
                        <CardContent className="p-5">
                            <Link
                                href={`/category/${item.key}`}
                                className="flex items-center gap-3 text-primary font-medium underline underline-offset-2"
                            >
                                <Icon className={`w-5 h-5 ${item.color}`} />
                                {item.label} {show === "subjects" ? "MCQs" : ""}
                            </Link>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
