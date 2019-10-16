// @flow strict


export function makePromise() {
  let resolve
  //eslint-disable-next-line promise/param-names
  const promise = new Promise( r => resolve = r )

  //noinspection JSUnusedAssignment
  return { promise, resolve }
}
