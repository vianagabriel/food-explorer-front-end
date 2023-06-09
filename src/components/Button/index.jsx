
import { Container } from "./styles"; 


export function Button({ title, loading = false,  icon: Icon, count, ...rest }){
  return(
    <Container

     type="button"
     disabled={loading}
     {...rest} 
    >
     {Icon && <Icon size={25}/>}
     { loading ? 'Carregando...' : title}
     {count}
    </Container>
  )
};