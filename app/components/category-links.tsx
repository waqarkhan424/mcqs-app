"use client"

import { Card, CardContent } from "@/components/ui/card"
import { pastPapers, categories } from "@/lib/category-data";
import Link from "next/link"


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
