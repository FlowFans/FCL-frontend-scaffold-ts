import {useEffect} from "react"
import {atom, useRecoilState, SetterOrUpdater} from "recoil"

export const currentUser = atom({
  key: "CURRENT_USER",
  default: {addr: '', loggedIn: false, cid: ''},
})


export const useCurrentUser = ():[] => {
  const [user, setUser] = useRecoilState(currentUser)

  return []
}


export const useCurrentUserAddr = ():string => {
  const [user] = useRecoilState(currentUser)
  if(!user.loggedIn) return ''
  return user.addr
}

