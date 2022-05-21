@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  <div>
    {switch url.path {
    | list{"profile", "my"} => <MyProfile />
    | list{"profile", id} => <UserProfile id />
    | list{"settings"} => <Settings />
    | list{"marketplace", category, id} => <Marketplace category id />
    | list{"play"} => <PlayScreen />
    | list{} => <HomeScreen />
    | _ => <p> {React.string("page not found")} </p>
    }}
  </div>
}
