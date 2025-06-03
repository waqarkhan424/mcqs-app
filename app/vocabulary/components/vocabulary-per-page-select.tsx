import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function VocabularyPerPageSelect({ topic, currentPerPage, searchTerm }: {
    topic: string,
    currentPerPage: number,
    searchTerm: string
}) {
    return (
        <Select defaultValue={String(currentPerPage)}>
            <SelectTrigger className="w-[140px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {[10, 20, 50].map((value) => (
                    <SelectItem key={value} value={String(value)}>
                        <Link href={`/vocabulary/${topic}?page=1&perPage=${value}${searchTerm ? `&search=${searchTerm}` : ""}`}>
                            {value} / page
                        </Link>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
