import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import Typography from "@/components/ui/typography"


interface Props {
    params: Promise<{ slug: string; department: string }>
}

export default async function DepartmentPage(props: Props) {

    const { slug, department } = await props.params


    const dept = await prisma.department.findFirst({
        where: {
            slug: department,
            ministry: {
                slug,
            },
        },
        include: {
            posts: true,
            ministry: true,
        },
    });

    if (!dept) return notFound();


    return (
        <div className="px-4 pt-12 pb-20 max-w-3xl mx-auto space-y-6 text-[16px] leading-7 text-foreground">
            <Typography variant="h2" className="text-center">
                {dept.name}
            </Typography>

            <Typography variant="p" className="text-muted-foreground text-center">
                Below is the list of posts under this department with required qualifications and age limits.
            </Typography>

            <div className="overflow-x-auto mt-6 rounded-md shadow border">
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-muted text-muted-foreground text-left">
                            <th className="border px-4 py-3 text-center">BPS</th>
                            <th className="border px-4 py-3">Post Name</th>
                            <th className="border px-4 py-3">Qualification</th>
                            <th className="border px-4 py-3">Age Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dept.posts.map((post, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "bg-background" : "bg-muted"}

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
