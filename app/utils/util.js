export function range(start, finish, step = 1) {
  const length = finish - start + 1;
  return Array.from(Array(length).keys()).map(i => start + i);
}
