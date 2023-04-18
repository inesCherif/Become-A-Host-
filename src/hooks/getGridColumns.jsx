export function getGridColumns(numTags) {
  if (numTags === 1) {
    return "1fr";
  } else if (numTags === 2) {
    return "1fr 1fr";
  } else if (numTags === 3) {
    return "1fr 1fr 1fr";
  } else if (numTags === 4) {
    return "1fr 1fr";
  } else {
    return "repeat(3, 1fr)";
  }
}
