"use client"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ministries } from "@/lib/ministries"
import Link from "next/link"

export default function MinistriesLinks() {

    return (
        <div className="px-4 py-8 max-w-5xl mx-auto">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Ministries
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">


                {ministries.map((m) => (
                    <Card
                        key={m.slug}
                        className="bg-green-50 transition rounded-xl border-none shadow-sm"
                    >
                        <CardContent className="p-5">
                            <Link
                                href={`/ministries/${m.slug}`}
                                className="flex items-center gap-3 font-medium text-green-700 underline underline-offset-2"

                            >
                                {m.name}
                            </Link>
                        </CardContent>
                    </Card>
                ))}


            </div>
        </div>
    )
}
