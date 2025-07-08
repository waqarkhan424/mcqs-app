"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EditVocabularyDialog({ wordData, onConfirm, disabled, children, }: { wordData: any; onConfirm: (formData: any) => void; disabled?: boolean; children: React.ReactNode; }) {

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        word: wordData.word,
        definition: wordData.definition,
        urduMeaning: wordData.urduMeaning || "",
        example: wordData.example || "",
    });

    const handleUpdate = () => {
        setOpen(false);
        onConfirm(form);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Vocabulary Word</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input
                        placeholder="Word"
                        value={form.word}
                        onChange={(e) => setForm({ ...form, word: e.target.value })}
                    />
                    <Input
                        placeholder="Definition"
                        value={form.definition}
                        onChange={(e) => setForm({ ...form, definition: e.target.value })}
                    />
                    <Input
                        placeholder="Urdu Meaning"
                        value={form.urduMeaning}
                        onChange={(e) => setForm({ ...form, urduMeaning: e.target.value })}
                    />
                    <Input
                        placeholder="Example"
                        value={form.example}
                        onChange={(e) => setForm({ ...form, example: e.target.value })}
                    />
                </div>

                <DialogFooter className="mt-4">
                    <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button size="sm" onClick={handleUpdate} disabled={disabled}>
                        {disabled ? "Saving..." : "Save"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
