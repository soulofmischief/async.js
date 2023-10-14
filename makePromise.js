/**
 * Return an object containing a promise and its resolve and reject methods.
 * @returns {{promise: Promise, reject: function, resolve: function}}
 */
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
