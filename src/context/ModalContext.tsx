import { ReactNode, createContext, useState } from "react"

interface IModalContecst {
  modal: boolean
  open: () => void
  close: () => void
}
export const ModalContext = createContext<IModalContecst>({
  modal: false,
  open: () => {},
  close: () => {},
})

export const ModalState = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState(false)

  const open = () => setModal(true)
  const close = () => setModal(false)
  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
