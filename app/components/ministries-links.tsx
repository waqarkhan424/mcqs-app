"use client"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ministries } from "@/lib/ministries"
import Link from "next/link"


import {
    Shield, ShieldCheck, DollarSign, Globe, BookOpen, Cpu,
    Leaf, ShoppingCart, Mail, Factory, BarChart2, Zap, Home,
    Handshake, Mountain, Scale, Anchor, Pill, Utensils, HeartPulse,
    Users, Landmark, ClipboardList, TrendingUp, Train, Sparkles,
    FlaskConical, Map, Droplet,
} from "lucide-react";



const ministryData: Record<
    string,
    { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; color: string }
> = {
    interior: { icon: Shield, color: "text-red-500" },
    defence: { icon: ShieldCheck, color: "text-blue-500" },
    finance: { icon: DollarSign, color: "text-green-600" },
    "foreign-affairs": { icon: Globe, color: "text-yellow-500" },
    "federal-education": { icon: BookOpen, color: "text-purple-500" },
    "it-telecom": { icon: Cpu, color: "text-indigo-500" },

    "climate-change": { icon: Leaf, color: "text-emerald-600" },
    commerce: { icon: ShoppingCart, color: "text-amber-600" },
    communications: { icon: Mail, color: "text-cyan-600" },
    "defence-production": { icon: Factory, color: "text-slate-600" },
    "economic-affairs": { icon: BarChart2, color: "text-pink-600" },
    energy: { icon: Zap, color: "text-orange-500" },
    "housing-works": { icon: Home, color: "text-teal-600" },
    "human-rights": { icon: Handshake, color: "text-red-600" },
    "industries-production": { icon: Factory, color: "text-gray-600" },
    "kashmir-gb": { icon: Mountain, color: "text-lime-600" },
    "law-justice": { icon: Scale, color: "text-rose-600" },
    "maritime-affairs": { icon: Anchor, color: "text-sky-600" },
    "narcotics-control": { icon: Pill, color: "text-fuchsia-600" },
    "food-security": { icon: Utensils, color: "text-green-700" },
    "health-services": { icon: HeartPulse, color: "text-red-500" },
    "overseas-hrd": { icon: Users, color: "text-blue-600" },
    "parliamentary-affairs": { icon: Landmark, color: "text-amber-700" },
    "planning-development": { icon: ClipboardList, color: "text-cyan-700" },
    privatisation: { icon: TrendingUp, color: "text-emerald-700" },
    railways: { icon: Train, color: "text-indigo-600" },
    "religious-affairs": { icon: Sparkles, color: "text-yellow-600" },
    "science-tech": { icon: FlaskConical, color: "text-purple-600" },
    safar: { icon: Map, color: "text-stone-600" },
    "water-resources": { icon: Droplet, color: "text-blue-700" },
}


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
