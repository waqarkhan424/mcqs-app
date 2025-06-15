"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";

export default function ContactUsPage() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Replace this with actual API logic
        await new Promise((res) => setTimeout(res, 1000));
        setStatus("sent");
        setSubject("");
        setMessage("");
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2">Contact Us</Typography>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    placeholder="Email Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
            </form>

            {status === "sent" && (
                <p className="text-green-600 font-medium">Message sent successfully!</p>
            )}
        </div>
    );
}
