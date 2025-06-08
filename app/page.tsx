"use client"

import { useState } from "react"
import CategoryLinks from "./components/category-links"
import BrowseSections from "./components/browse-sections"
import Typography from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"subjects" | "past">("subjects")

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto space-y-10">
      {/* Heading */}
      <div className="text-center space-y-2">
        <Typography variant="h2">
          Welcome to <span className="text-primary font-serif">one</span><span className="text-muted-foreground font-serif">paper</span>
        </Typography>
        <Typography className="text-sm sm:text-base text-muted-foreground">
          Prepare for government jobs with topic-wise One Paper MCQs – English, GK, Current Affairs, Islamic Studies, Math, Computer, and more.
        </Typography>
      </div>

      {/* Tabs (pill style, matches image) */}
      <div className="flex justify-center">
        {/* <div className="flex w-[320px] sm:w-[400px] rounded-full border border-border bg-muted overflow-hidden"> */}
        <div className="flex w-[320px] sm:w-[400px] border border-border bg-muted overflow-hidden rounded-lg">


          <Button
            variant="ghost"
            className={`w-1/2 py-2 rounded-none text-sm font-medium transition-colors ${activeTab === "subjects"
              ? "bg-primary text-white hover:bg-primary"
              : "text-foreground hover:bg-muted"
              }`}
            onClick={() => setActiveTab("subjects")}
          >
            Subjects
          </Button>

          <Button
            variant="ghost"
            className={`w-1/2 py-2 rounded-none text-sm font-medium transition-colors ${activeTab === "past"
              ? "bg-primary text-white hover:bg-primary"
              : "text-foreground hover:bg-muted"
              }`}
            onClick={() => setActiveTab("past")}
          >
            Past Papers
          </Button>




        </div>
      </div>

      {/* Conditional Content */}
      <CategoryLinks show={activeTab} />

      {/* Extra Sections */}
      <BrowseSections />
    </div>
  )
}
