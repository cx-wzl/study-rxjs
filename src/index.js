import _ from "lodash";
import * as rxjs from "rxjs";
import { timeoutWith } from "rxjs/operators";

const seconds = rxjs.interval(1000);
const minutes = rxjs.interval(2000);

seconds.pipe(timeoutWith(900, minutes)).subscribe(
  (value) => console.log(value), // After 900ms, will start emitting `minutes`,
  // since first value of `seconds` will not arrive fast enough.
  (err) => console.log(err) // Would be called after 900ms in case of `timeout`,
  // but here will never be called.
);

function component() {
  const element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
