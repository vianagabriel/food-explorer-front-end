import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, ...rest }){
  return(
    <Container {...rest}>
        {Icon && <Icon size={25}/>}
        {title}
    </Container>
  )
};