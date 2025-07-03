// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// interface Props {
//     topic: string;
//     searchTerm: string;
//     currentPerPage: number;
// }

// export default function VocabularyPerPageSelect({ topic, currentPerPage, searchTerm, }: Props) {

//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const handleChange = (value: string) => {
//         const newPerPage = parseInt(value, 10);
//         const currentPage = parseInt(searchParams.get("page") || "1", 10);
//         const currentIndex = (currentPage - 1) * currentPerPage;

//         // Calculate the new page number so user stays close to their current position
//         const newPage = Math.floor(currentIndex / newPerPage) + 1;

//         const params = new URLSearchParams(searchParams.toString());
//         params.set("page", String(newPage));
//         params.set("perPage", value);
//         if (searchTerm) params.set("search", searchTerm);

//         router.push(`/vocabulary/${topic}?${params.toString()}`);
//     };

//     return (
//         <Select defaultValue={String(currentPerPage)} onValueChange={handleChange}>
//             <SelectTrigger className="w-[140px]">
//                 <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//                 {[10, 20, 50].map((value) => (
//                     <SelectItem key={value} value={String(value)}>
//                         {value} / page
//                     </SelectItem>
//                 ))}
//             </SelectContent>
//         </Select>
//     );
// }
