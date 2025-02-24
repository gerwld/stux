function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

export default toTitleCase;
