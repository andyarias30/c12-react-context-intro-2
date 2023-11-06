import { useContext } from "react"

import { UserContext } from "../App"

export default function Header() {
   const {userState} =  useContext(UserContext)

    console.log('userInfo ->', userState)
    return (
        <h2>This header{userState.userName}</h2>
    )
}