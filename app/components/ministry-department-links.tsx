
"use client"
import Link from "next/link"
import { Department } from "@/lib/ministries"

export default function MinistryDepartmentLinks({
    slug,
    departments,
}: {
    slug: string
    departments: Department[]
}) {
    return (
        <div className="space-y-3">
            <ol className="list-decimal pl-5 space-y-1">
                {departments.map((dept, idx) => (
                    <li key={idx}>
                        <Link
                            href={`/ministries/${slug}/${dept.slug}`}
                            className="text-blue-700 underline font-medium hover:text-blue-900"
                        >
                            {dept.name} – {dept.type}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}
