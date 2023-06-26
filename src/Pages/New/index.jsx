import { Form, Main } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { CaretLeft, UploadSimple } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { NoteItem } from '../../components/NoteItem';





export function New() {
    return (

        <>
            <Header />
            <Main>
                <ButtonText to='/' title='Voltar' icon={CaretLeft} />

                <h3>Novo prato</h3>

                <Form>
                    <div className="primaryInputs">
                        <div className="imgPlate">
                            <label htmlFor="">Imagem do prato</label>
                            <label htmlFor="photo" className='input'>
                                <input type="file" id='photo' />
                                <Input
                                    isDark
                                    icon={UploadSimple}
                                    iconLarge
                                    readOnly
                                    value='Selecione imagem'
                                />
                            </label>
                        </div>

                        <div className="name">
                            <label htmlFor="">Nome</label>
                            <Input
                                placeholder='Ex: Salada Ceasar'
                                isDark
                            />
                        </div>

                        <div className="category">
                            <label htmlFor="">Categoria</label>
                            <div className="select">
                                <select name="" id="">
                                    <option value="">Refeição</option>
                                    <option value="">Sobremesa</option>
                                    <option value="">Bebida</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="secondaryInputs">
                        <div className="ingredients">
                            <label htmlFor="">Ingredientes</label>
                            <div className="containerIngredients">
                                <NoteItem
                                    value='pão naãn'
                                    isNew
                                />

                                <NoteItem
                                    placeholder='Adicionar'

                                />

                            </div>
                        </div>


                        <div className="price">
                            <label htmlFor="">Preço</label>
                            <Input
                                type='number'
                                placeholder='R$ 00,00'
                                isDark
                            />
                        </div>
                    </div>

                    <div className="description">
                        <label htmlFor="">Descrição</label>
                        <Textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
                    </div>

                    <Button title='Salvar alterações'  />
                </Form>
            </Main>

            <Footer />
        </>

    )
}