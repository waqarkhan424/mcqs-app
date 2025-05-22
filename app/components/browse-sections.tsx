"use client";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function BrowseSections() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
            <Typography variant="h2" className="text-center">
                Browse Sections
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Card className="bg-green-50 transition rounded-xl border-none shadow-sm">
                    <CardContent className="p-5">
                        <Link href="/ministries" className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2">
                            Ministries
                        </Link>
                    </CardContent>
                </Card>

                <Card className="bg-green-50 transition rounded-xl border-none shadow-sm">
                    <CardContent className="p-5">
                        <Link href="/english" className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2">
                            English Grammar
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
