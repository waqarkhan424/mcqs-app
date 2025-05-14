import { ministries } from "@/lib/ministries"
import { notFound } from "next/navigation"
import Typography from "@/components/ui/typography"

export default async function DepartmentPage({
    params,
}: {
    params: { slug: string; department: string }
}) {
    const { slug, department } = await params

    const ministry = ministries.find((m) => m.slug === slug)
    const dept = ministry?.departments.find((d) => d.slug === department)

    if (!ministry || !dept) return notFound()

    return (
        <div className="px-4 pt-12 max-w-4xl mx-auto space-y-6">
            <Typography variant="h2">{dept.name}</Typography>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm mt-4">
                    <thead>
                        <tr className="bg-muted">
                            <th className="border px-3 py-2 text-center">BS</th>
                            <th className="border px-3 py-2 text-left">Post Name</th>
                            <th className="border px-3 py-2 text-left">Qualification</th>
                            <th className="border px-3 py-2 text-left">Age Limit (Years)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dept.posts.map((p, i) => (
                            <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                                <td className="border px-3 py-2 text-center">{p.bs}</td>
                                <td className="border px-3 py-2 text-left">{p.postName}</td>
                                <td className="border px-3 py-2 text-left">{p.qualification}</td>
                                <td className="border px-3 py-2 text-left">{p.ageLimit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
