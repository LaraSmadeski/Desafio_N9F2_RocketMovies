import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Container, Content } from './styles';

export function New(){
    return(
        <Container>
            <Header />

            <Link to="/">
                <ButtonText title="Voltar"/>
            </Link>

            <Content>
                <h1>Novo filme</h1>

                <div className="input">
                    <input type="text" placeholder="Título" />
                    <input type="text" placeholder="Sua nota (de 0 a 5)" />
                </div>

                <Textarea placeholder="Observações" />

                <h2>Marcadores</h2>

                <div className="tags">
                    <NoteItem value="react" />
                    <NoteItem isNew placeholder="Novo marcador" />
                </div>

                <div className="buttons">
                    <button className="delete">Excluir filme</button>
                    <button className="add">Salvar alterações</button>
                </div>

            </Content>
        </Container>
    )
}