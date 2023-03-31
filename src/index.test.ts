import Solution from "../src/index";
const solution = new Solution();
import { readFileSync } from "fs";

const file = readFileSync("./document.txt", "utf-8");

describe("Top words", function () {
  it("should return top 20 words with repeating time value", () => {
    const topWords: [string, number][] = [
      ["at", 2],
      ["of", 2],
      ["can.", 1],
      ["we", 1],
      ["best", 1],
      ["year", 1],
      ["enjoy", 1],
      ["let's", 1],
      ["time", 1],
      ["this", 1],
      ["year?", 1],
      ["starts", 1],
      ["world", 1],
      ["believe", 1],
      ["you", 1],
      ["Can", 1],
    ];

    const result = solution.reportTopWords(file);

    expect(result).toEqual(topWords);
  });

  test("should return top 20 words considering extra keywords", () => {
    const topWords: [string, number][] = [
      ["at", 2],
      ["of", 2],
      ["can.", 1],
      ["we", 1],
      ["best", 1],
      ["enjoy", 1],
      ["let's", 1],
      ["time", 1],
      ["this", 1],
      ["?", 1],
      ["starts", 1],
      ["believe", 1],
      ["you", 1],
      ["Can", 1],
    ];

    const extraKeywords: string[] = ["world", "year"];
    const result = solution.reportTopWords(file, extraKeywords);

    expect(result).toEqual(topWords);
  });
});
