type userRecord = {grade: string}

type userVariants =
  | Programmer(userRecord)
  | Manager(userRecord)
  | Visitor(userRecord)

type serviceRights = {
  guest: bool,
  user: bool,
  admin: bool,
}

type serviceVariants =
  | Gitlab(serviceRights)
  | Jira(serviceRights)
  | Confluence(serviceRights)
  | Special

let user = Programmer({grade: "teamlead"})

let services = switch user {
| Programmer({grade: "teamlead"}) => [
    Gitlab({admin: true, user: true, guest: false}),
    Jira({admin: true, user: true, guest: false}),
    Confluence({admin: true, user: true, guest: false}),
    Special
  ]
| Programmer({grade: "techlead"}) => [
    Gitlab({admin: true, user: true, guest: false}),
    Jira({admin: true, user: true, guest: false}),
    Confluence({admin: true, user: true, guest: false}),
    Special
  ]
| Programmer({grade: "middle"}) => [
    Gitlab({admin: false, user: true, guest: false}),
    Jira({admin: false, user: true, guest: false}),
    Confluence({admin: false, user: true, guest: false}),
  ]
| Programmer(_programmer) => [
    Gitlab({admin: false, user: true, guest: false}),
    Jira({admin: false, user: true, guest: false}),
    Confluence({admin: false, user: true, guest: false}),
  ]
| Manager(_manager) => [
    Gitlab({admin: false, user: true, guest: false}),
    Jira({admin: true, user: true, guest: false}),
    Confluence({admin: true, user: true, guest: false}),
  ]
| Visitor(_visitor) => [
    Gitlab({admin: false, user: false, guest: true}),
    Jira({admin: false, user: false, guest: true}),
    Confluence({admin: false, user: false, guest: true}),
  ]
}

Js.log(services)
