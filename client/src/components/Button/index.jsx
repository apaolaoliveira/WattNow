import { ButtonStyle } from "./style"

export default function ButtonGradient({ children, onClick }){
  return (
    <ButtonStyle onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}