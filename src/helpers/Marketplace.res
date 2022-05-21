@genType
@react.component
let make = (~category, ~id) => {
    <div>{React.string(`marketplace cat: ${category}, id: ${id}`)}</div>
}