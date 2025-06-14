"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function MCQsPerPageSelect({
    slug,
    topic,
    currentPerPage,
}: {
    slug: string
    topic: string
    currentPerPage: number
}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChange = (value: string) => {
        const newPerPage = parseInt(value, 10)
        const currentPage = parseInt(searchParams.get("page") || "1", 10)
        const currentIndex = (currentPage - 1) * currentPerPage

        const newPage = Math.floor(currentIndex / newPerPage) + 1
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", String(newPage))
        params.set("perPage", value)

        router.push(`/category/${slug}/${topic}?${params.toString()}`)
    }

    return (
        <Select defaultValue={String(currentPerPage)} onValueChange={handleChange}>
            <SelectTrigger className="w-[120px] h-8">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {[5, 10, 20, 50].map((val) => (
                    <SelectItem key={val} value={String(val)}>
                        {val} / page
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
