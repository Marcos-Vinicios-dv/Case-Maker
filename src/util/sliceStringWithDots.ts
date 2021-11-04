export const sliceStringWithDots = (string: string, maxLength: number) => {
  return string.slice(0, maxLength).concat(' ...');
};
