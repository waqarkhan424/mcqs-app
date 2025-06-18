"use client";
import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import EditDeleteMCQCard from "@/app/components/edit-delete-mcqs-card";

export default function EditDeleteMcqsList({ questions, enableDelete = true }: { questions: any[]; enableDelete?: boolean }) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [openDialog, setOpenDialog] = useState(false);

    const toggleSelect = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selectedIds.length === questions.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(questions.map((q) => q.id));
        }
    };

    const handleDeleteSelected = async () => {
        await Promise.all(selectedIds.map((id) => delete_mcqs(id)));
        window.location.reload();
    };

    return (
        <div className="space-y-6">
            {enableDelete && (
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Checkbox checked={selectedIds.length === questions.length} onCheckedChange={toggleAll} />
                        <span className="text-sm font-medium">Select All</span>
                    </div>
                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                        <DialogTrigger asChild>
                            <Button variant="destructive" size="sm" disabled={selectedIds.length === 0}>
                                Delete ({selectedIds.length})
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure?</DialogTitle>
                                <DialogDescription>This will permanently delete {selectedIds.length} selected MCQ(s).</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button size="sm" variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                <Button size="sm" variant="destructive" onClick={async () => {
                                    await handleDeleteSelected();
                                    setOpenDialog(false);
                                }}>Yes, delete</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            )}

            {questions.map((q, idx) => (
                <EditDeleteMCQCard key={q.id} q={q} index={idx + 1} enableDelete={enableDelete} selected={selectedIds.includes(q.id)} toggleSelect={toggleSelect} />
            ))}
        </div>
    );
}
