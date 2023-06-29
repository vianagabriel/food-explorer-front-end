import { Form, Main } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { CaretLeft, UploadSimple } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { NoteItem } from '../../components/NoteItem';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function New() {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    async function handleNewPlate(){
        await api.post('/plates', { 
            title,
            description,
            price,
            category,
            ingredients,
            image
        })

        alert('Prato cadastrado com sucesso.');
        navigate('/')
    }

    function handleAddIngredients() {
        if(newIngredient === '') return;
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient('')
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(link => link !== deleted))
    }

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
                                <input 
                                  type="file" 
                                  id='photo'
                                  onChange={e => setImage(e.target.files[0])}
                                  
                                />
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
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="category">
                            <label htmlFor="">Categoria</label>
                            <div className="select">
                                <select 
                                   name="" 
                                   id=""
                                   onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="refeições">Refeição</option>
                                    <option value="sobremesas">Sobremesa</option>
                                    <option value="bebidas">Bebidas</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="secondaryInputs">
                        <div className="ingredients">
                            <label htmlFor="">Ingredientes</label>
                            <div className="containerIngredients">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <NoteItem
                                            key={index}
                                            value={ingredient}
                                            isNew
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))


                                }

                                <NoteItem
                                    placeholder='Adicionar'
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredients}
                                />

                            </div>
                        </div>


                        <div className="price">
                            <label htmlFor="">Preço</label>
                            <Input
                                type='number'
                                placeholder='R$ 00,00'
                                isDark
                                onChange={e => setPrice(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className="description">
                        <label htmlFor="">Descrição</label>
                        <Textarea 
                          placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' 
                          onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <Button 
                      title='Salvar alterações'
                      onClick={handleNewPlate} 
                    />
                </Form>
            </Main>

            <Footer />
        </>

    )
}