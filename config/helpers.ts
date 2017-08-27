import * as path from 'path';
let _root = path.resolve(__dirname, '..');

/**
 * Get the path name of the files. Used in the webpack configuration.
 * @param args Insert the segments of the path.
 */
export const root = (...args: string[]) => {
  return path.join.apply(path, [_root].concat(args));
};