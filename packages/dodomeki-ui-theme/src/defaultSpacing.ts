export const defaultSpacing = (...args: number[]) =>
  args.map((arg) => `${arg * 8}px`).join(' ');
