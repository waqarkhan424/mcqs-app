// import prisma from "@/lib/prisma"
// import { notFound } from "next/navigation"
// import Typography from "@/components/ui/typography"
// import MinistryDepartmentLinks from "@/app/components/ministry-department-links"

// interface Props {
//     params: Promise<{ slug: string }>
// }

// export default async function MinistryPage(props: Props) {
//     const { slug } = await props.params


//     const ministry = await prisma.ministry.findUnique({
//         where: { slug },
//         include: {
//             departments: {
//                 include: {
//                     posts: true,
//                 },
//             },
//         },
//     });

//     if (!ministry) return notFound();


//     return (
//         <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-5xl mx-auto space-y-6">
//             <div className="border-b pb-4 space-y-2">
//                 <Typography variant="h2" className="capitalize">
//                     {ministry.name}
//                 </Typography>
//                 <Typography variant="p" className="text-muted-foreground">
//                     Select a department below to explore. Each one plays a vital role in Pakistan’s governance.
//                 </Typography>
//             </div>

//             <MinistryDepartmentLinks slug={slug} departments={ministry.departments} />
//         </div>
//     )
// }
