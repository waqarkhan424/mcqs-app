// import Link from "next/link";
// import Typography from "@/components/ui/typography";
// import { vocabularyTopics } from "@/lib/vocabulary-topics";

// export default function VocabularySidebar({ activeTopic }: { activeTopic: string }) {
//     return (
//         <aside className="space-y-4">
//             <Typography variant="h4">All Topics</Typography>
//             <ul className="space-y-1">
//                 {vocabularyTopics.map((t) => (
//                     <li key={t.slug}>
//                         <Link
//                             href={`/vocabulary/${t.slug}`}
//                             className={`block px-3 py-1.5 rounded-md font-medium transition hover:bg-muted
//                                 ${activeTopic === t.slug
//                                     ? "bg-primary text-primary-foreground"
//                                     : "text-primary"
//                                 }`}

//                         >
//                             {t.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </aside>
//     );
// }
