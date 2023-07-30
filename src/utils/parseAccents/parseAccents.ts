const parseAccents = (text: string): string[] | string => {
  const accentMarker = "<&>";
  const escapedText = text.replaceAll("\n", "\\n");

  const toParseString =
    '["' + escapedText.replaceAll(accentMarker, '","') + '"]';

  let parsedString;
  try {
    parsedString = JSON.parse(toParseString);
  } catch (e) {
    console.error(e);
  }

  return parsedString ? (parsedString as string[]) : text;
};

export default parseAccents;
