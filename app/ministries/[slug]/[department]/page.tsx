import { ministries } from "@/lib/ministries"
import { notFound } from "next/navigation"
import Typography from "@/components/ui/typography"





export default async function DepartmentPage({ params }: { params: { slug: string, department: string } }) {
    const { slug, department } = await params

    const ministry = ministries.find((m) => m.slug === slug)
    const dept = ministry?.departments.find((d) => d.slug === department)


    if (!ministry || !dept) return notFound()

    return (
        <div className="px-4 pt-12 max-w-4xl mx-auto">
            <Typography variant="h2">{dept.name}</Typography>
            <table className="w-full mt-6 table-auto border-collapse">
                <thead>
                    <tr className="bg-muted">
                        <th className="border px-2 py-1">BPS</th>
                        <th className="border px-2 py-1">Post Title</th>
                        <th className="border px-2 py-1">Entry / Promotion</th>
                    </tr>
                </thead>
                <tbody>
                    {dept.posts.map((p, i) => (
                        <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                            <td className="border px-2 py-1">{p.bps}</td>
                            <td className="border px-2 py-1">{p.title}</td>
                            <td className="border px-2 py-1">{p.entry}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
