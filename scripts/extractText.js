// scripts/extractText.js
const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");

const inputDir = "./data/mcqs_raw";
const outputFile = "./data/raw_text_output.txt";

fs.writeFileSync(outputFile, "");

fs.readdirSync(inputDir).forEach((file) => {
  const fullPath = path.join(inputDir, file);
  Tesseract.recognize(fullPath, "eng").then(({ data: { text } }) => {
    fs.appendFileSync(outputFile, `\n=== ${file} ===\n${text}\n`);
    console.log(`Extracted text from ${file}`);
  });
});
