// "use client";

// import {
//     Dialog,
//     DialogTrigger,
//     DialogContent,
//     DialogHeader,
//     DialogDescription,
//     DialogTitle,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function DeleteConfirmDialog({ onConfirm, disabled, children, }: { onConfirm: () => void; disabled?: boolean; children: React.ReactNode; }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>{children}</DialogTrigger>

//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>Delete Word</DialogTitle>
//                 </DialogHeader>

//                 <DialogDescription>
//                     Are you sure you want to delete this word? This action cannot be undone.
//                 </DialogDescription>


//                 <DialogFooter className="mt-4">
//                     <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
//                         Cancel
//                     </Button>
//                     <Button size="sm" variant="destructive" onClick={() => { setOpen(false); onConfirm(); }} disabled={disabled}>
//                         {disabled ? "Deleting..." : "Delete"}
//                     </Button>
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// }
