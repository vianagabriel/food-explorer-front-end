import { Container } from "./styles";

export function Button({ title, loading = false, isLight, icon: Icon, count, ...rest }){
  return(
    <Container
     isLight={isLight}
     type="button"
     disabled={loading}
     {...rest} 
    >
     {Icon && <Icon size={25}/>}
     { loading ? 'Carregando' : title}
     {count}
    </Container>
  )
};