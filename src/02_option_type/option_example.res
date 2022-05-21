let getSomeData = path => {
  if path == "some/path" {
    Some("data")
  } else {
    None
  }
}

@react.component
let make = () => {
  let (dataOption, _setDataOption) = React.useState(() => getSomeData("path"))

  let Some(_data) = dataOption

  switch dataOption {
  | Some(data) => <div>{React.string(data)}</div>
  | None => <div>{React.string("No data")}</div>
  }
}
