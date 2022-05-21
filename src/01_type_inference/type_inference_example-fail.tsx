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

function useRoom () {
  return React.useContext(context)
}

function useConnect() {
  const [_room, setRoom] = useRoom()

  return (room) => setRoom(room)
}

export function Component() {
  const connect = useConnect()
  connect({id: "id", body: "body", connected: true})

  return <div>Hello, world</div>
}


