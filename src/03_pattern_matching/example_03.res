type payload =
  | BadResult(int)
  | GoodResult(string)
  | NoResult

let data = GoodResult("Product shipped!")
switch data {
| GoodResult(theMessage) =>
  Js.log("Success! " ++ theMessage)
| BadResult(errorCode) =>
  Js.log("Something's wrong. The error code is: " ++ Js.Int.toString(errorCode))
| NoResult =>
  Js.log("Bah.")
}