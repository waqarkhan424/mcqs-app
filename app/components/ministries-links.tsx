"use client"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ministries } from "@/lib/ministries"
import Link from "next/link"
import { Shield, ShieldCheck, DollarSign, Globe, BookOpen, Cpu } from "lucide-react"


const ministryData: Record<
    string,
    {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
        color: string
    }
> = {
    interior: { icon: Shield, color: "text-red-500" },
    finance: { icon: DollarSign, color: "text-green-500" },
    defence: { icon: ShieldCheck, color: "text-blue-500" },
    "foreign-affairs": { icon: Globe, color: "text-yellow-500" },
    "federal-education": { icon: BookOpen, color: "text-purple-500" },
    "it-telecom": { icon: Cpu, color: "text-indigo-500" },
}


export default function MinistriesLinks() {

    return (
        <div className="px-4 py-8 max-w-5xl mx-auto">
            <Typography variant="h2" className="mb-6 text-center">
                Browse Ministries
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">


                {ministries.map((m) => {

                    const { icon: Icon, color } =
                        ministryData[m.slug] || { icon: Globe, color: "text-gray-500" }

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
