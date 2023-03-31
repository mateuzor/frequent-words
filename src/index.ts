function removeFromString(arr: string[], str: string): string {
  const regex = new RegExp(`\\b(${arr.join("|")})\\b`, "gi");
  return str.replace(regex, "");
}

function countRepeatedWords(sentence: string): Record<string, number> {
  const words = sentence.split(/\s+/);
  const wordMap: Record<string, number> = {};

  words.forEach((word) => {
    if (word) {
      wordMap[word] = (wordMap[word] || 0) + 1;
    }
  });

  return wordMap;
}

class Solution {
  public reportTopWords(
    documentText: string,
    extraKeywords: string[] = []
  ): [string, number][] {
    let defaultKeywords = ["the", "end"];
    if (extraKeywords.length > 0) {
      defaultKeywords = [...defaultKeywords, ...extraKeywords];
    }

    const stringCleanup = removeFromString(defaultKeywords, documentText);

    const words = countRepeatedWords(stringCleanup);

    const sortable: [string, number][] = [];
    for (const word in words) {
      sortable.push([word, words[word]]);
    }

    const sorted = sortable
      .sort((a, b) => {
        return a[1] - b[1];
      })
      .reverse()
      .slice(0, 20);

    return sorted;
  }
}

export default Solution;
