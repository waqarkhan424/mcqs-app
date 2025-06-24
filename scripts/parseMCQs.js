// scripts/parseMCQs.js
const fs = require("fs");

const input = fs.readFileSync("./data/raw_text_output.txt", "utf-8");

const mcqRegex =
  /(.+?)\?\s*A\.\s*(.+?)\s*B\.\s*(.+?)\s*C\.\s*(.+?)\s*D\.\s*(.+?)(?:\s*correctAnswer[:=]?\s*(\w))?/g;

const results = [];

let match;
while ((match = mcqRegex.exec(input)) !== null) {
  const [_, question, a, b, c, d, correct] = match;

  results.push({
    question: question.trim(),
    options: [a.trim(), b.trim(), c.trim(), d.trim()],
    correctAnswer: correct?.trim() || null,
    category: "General Knowledge", // Optional
    topic: "OCR Upload", // Optional
  });
}

fs.writeFileSync("./data/parsed_mcqs.json", JSON.stringify(results, null, 2));
console.log("✅ Parsed MCQs saved to parsed_mcqs.json");
