// "use client"
// import Link from "next/link"
// import Typography from "@/components/ui/typography"


// interface Post {
//     id: string;
//     bs: string;
//     postName: string;
//     qualification: string;
//     ageLimit: string;
// }

// interface Department {
//     id: string;
//     name: string;
//     slug: string;
//     type: string;
//     posts: Post[];
// }



// export default function MinistryDepartmentLinks({ slug, departments, }: { slug: string, departments: Department[] }) {

//     return (
//         <div className="space-y-4">
//             <Typography variant="p" affects="muted" size="sm">
//                 Each department is labeled with its type (e.g., Authority, Commission, Directorate).
//                 This helps you understand its role in the government.
//             </Typography>

//             <ol className="list-decimal pl-5 space-y-2">
//                 {departments.map((dept, idx) => (
//                     <li key={idx}>
//                         <div>
//                             <Link
//                                 href={`/ministries/${slug}/${dept.slug}`}
//                                 className="text-primary underline font-medium hover:text-primary/90"

//                             >
//                                 {dept.name}
//                             </Link>

//                             <Typography variant="p" affects="muted" size="sm" className="pl-1">
//                                 {dept.type}
//                             </Typography>
//                         </div>
//                     </li>
//                 ))}
//             </ol>
//         </div>
//     )
// }
