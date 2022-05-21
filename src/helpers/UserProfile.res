@genType
@react.component
let make = (~id) => {
    <div>{React.string("User #" ++ id)}</div>
}