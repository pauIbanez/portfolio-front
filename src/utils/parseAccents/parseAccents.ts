const parseAccents = (text: string): string[] | string => {
  const accentMarker = "<&>";
  const toParseString = '["' + text.replaceAll(accentMarker, '","') + '"]';

  let parsedString;
  try {
    parsedString = JSON.parse(toParseString);
  } catch (e) {}

  return parsedString ? (parsedString as string[]) : text;
};

export default parseAccents;
