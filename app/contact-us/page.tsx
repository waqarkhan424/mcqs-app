"use client";

import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { send_contact_message } from "../actions/send_contact_message";

export default function ContactUsPage() {
    const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        setStatus("idle");
        startTransition(async () => {
            const result = await send_contact_message(formData);
            if (result.success) {
                setStatus("sent");
            } else {
                setStatus("error");
            }
        });
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Contact Us</Typography>
            <p className="text-sm text-muted-foreground">
                Have a question or feedback? Fill out the form below and we'll get back to you shortly.
            </p>

            <form action={handleSubmit} className="space-y-4">
                <Input type="email" name="email" placeholder="Your Email" required />
                <Input name="subject" placeholder="Email Subject" required />
                <Textarea name="message" placeholder="Your Message" rows={6} required />

                <Button type="submit" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                </Button>
            </form>

            {status === "sent" && <p className="text-green-600">Message sent!</p>}
            {status === "error" && <p className="text-red-600">Failed to send message.</p>}
        </div>
    );
}
