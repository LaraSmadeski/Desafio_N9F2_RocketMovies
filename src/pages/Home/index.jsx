import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home(){
    return(
        <Container>
            <Header />

            <Section to="/new" title="Meus filmes">
                <button>
                    <FiPlus /> Adicionar filme
                </button>
            </Section>

            <Content>
                <Note data={{
                    title: 'Interestellar',
                    p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                    ]
                }} />

                <Note data={{
                    title: 'Interestellar',
                    p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                    ]
                }} />

                <Note data={{
                    title: 'Interestellar',
                    p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                    ]
                }} />
            </Content>
        </Container>
    )
}