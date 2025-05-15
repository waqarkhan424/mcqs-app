import { ministries } from "@/lib/ministries"
import { notFound } from "next/navigation"
import Typography from "@/components/ui/typography"

export default async function DepartmentPage({
    params,
}: {
    params: { slug: string; department: string }
}) {
    const { slug, department } = params

    const ministry = ministries.find((m) => m.slug === slug)
    const dept = ministry?.departments.find((d) => d.slug === department)

    if (!ministry || !dept) return notFound()

    return (
        <div className="px-4 pt-12 pb-20 max-w-3xl mx-auto space-y-6 text-[16px] leading-7 text-gray-800">
            <Typography variant="h2" className="text-center">
                {dept.name}
            </Typography>

            <Typography variant="p" className="text-muted-foreground text-center">
                Below is the list of posts under this department with required qualifications and age limits.
            </Typography>

            <div className="overflow-x-auto mt-6 rounded-md shadow border border-gray-200">
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left">
                            <th className="border px-4 py-3 text-center">BPS</th>
                            <th className="border px-4 py-3">Post Title</th>
                            <th className="border px-4 py-3">Qualification</th>
                            <th className="border px-4 py-3">Age Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dept.posts.map((post, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                                <td className="border px-4 py-3 text-center font-medium">{post.bs}</td>
                                <td className="border px-4 py-3">{post.postName}</td>
                                <td className="border px-4 py-3">{post.qualification}</td>
                                <td className="border px-4 py-3">{post.ageLimit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
