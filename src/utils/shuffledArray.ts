export function createSelectAnswer(otherAnswer: string[], answer: string) {
  const selectAnswer = [...otherAnswer, answer];
  return shuffledArray(selectAnswer);
}

export function shuffledArray(baseArray: string[]) {
  return baseArray.sort(() => Math.random() - 0.5);
}
