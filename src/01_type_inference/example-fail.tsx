import React from "react";

interface Room {
  id: string;
  body: string;
  connected: boolean;
}

const room: Room = {
  id: "asdf",
  body: "asdf",
  connected: false
}


const context = React.createContext([room, (_) => { }])

const useState = () => React.useContext(context)

const useConnect = () => {
  const [_room, setRoomState] = useState()

  return (room) => setRoomState(room)
}

export function Component() {
  const connect = useConnect()
  connect({id: "id", body: "body", connected: true})

  return <div>Hello, world</div>
}


