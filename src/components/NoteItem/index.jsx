import { Container } from "./styles";
import { Plus, X } from '@phosphor-icons/react';
 
export function NoteItem({ isNew, value, onClick, ...rest }) {
    return(
    <Container isNew={isNew}>
        <input 
          type="text"
          value={value}
          readOnly={isNew}
          {...rest}
        />

        <button
          type="button"
          onClick={onClick}

        >
         { isNew ? <X/> : <Plus/>}
        </button>
    </Container>
 )
}