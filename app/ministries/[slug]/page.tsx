import { ministries } from "@/lib/ministries"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import Link from "next/link"



export default async function MinistryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params

    const ministry = ministries.find((m) => m.slug === slug)

    if (!ministry) return notFound()

    return (
        <div className="px-4 pt-12 max-w-5xl mx-auto space-y-6">
            <Typography variant="h2">{ministry.name}</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {ministry.departments.map((d) => (
                    <Link
                        key={d.slug}
                        href={`/ministries/${slug}/${d.slug}`}
                        passHref
                    >
                        <Card className="cursor-pointer">
                            <CardContent>
                                <Typography variant="h3">{d.name}</Typography>
                                <Typography className="text-sm text-muted-foreground">
                                    {d.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}

            </div>
        </div>
    )
}
