// @flow strict


export function makePromise() {
  let reject, resolve

  //eslint-disable-next-line promise/param-names
  const promise = new Promise(( res, rej ) => {
    reject = rej
    resolve = res
  })

  //noinspection JSUnusedAssignment
  return { promise, reject, resolve }
}
