"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ministries } from "@/lib/ministries"

export default function MinistriesLinks() {
    const router = useRouter()
    return (
        <div className="px-4 py-8 max-w-5xl mx-auto">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Ministries
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {ministries.map((m) => (
                    <Card
                        key={m.slug}
                        onClick={() => router.push(`/ministries/${m.slug}`)}
                        className="cursor-pointer bg-green-50 transition rounded-xl border-none shadow-sm"

                    >
                        <CardContent className="p-5 text-center font-medium">
                            {m.name}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
