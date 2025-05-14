"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ministryData } from "@/lib/ministry-icons"
import Typography from "@/components/ui/typography"
import { ministries } from "@/lib/ministries"
import Link from "next/link"


export default function MinistriesLinks() {

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Ministries
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> */}

                {ministries.map((m) => {

                    const { icon: Icon, color } =
                        ministryData[m.slug] || { icon: ministryData["foreign-affairs"].icon, color: "text-gray-500" };

                    return (
                        <Card key={m.slug} className="bg-green-50 transition rounded-xl border-none shadow-sm"
                        >
                            <CardContent className="p-5">
                                <Link
                                    href={`/ministries/${m.slug}`}
                                    className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                                >
                                    <Icon className={`w-5 h-5 ${color}`} />
                                    {m.name}
                                </Link>
                            </CardContent>
                        </Card>

                    )
                })}


            </div>
        </div>
    )
}
