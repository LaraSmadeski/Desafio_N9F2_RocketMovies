import { Container, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function Details(){
    return(
        <Container>
            <Header />
            <Content>
                <ButtonText icon={FiArrowLeft} title="Voltar"/>
                <div className="top">
                    <h1>Atlas (2024)</h1>
                    <Rating />
                </div>

                <div className="mid">
                    <img src="https:/github.com/larasmadeski.png" alt="" />
                    <span>Por Lara Smadeski</span>
                    <CiClock2 />
                    <span>22/07/2024 às 21:05</span>
                </div>

                <Section>
                    <Tag title="Ficção Científica" />
                    <Tag title="Ação" />
                </Section>

                <p>
                "Athas" é um filme de ficção científica que se passa em um futuro distópico onde a humanidade enfrenta uma série de desafios ambientais e sociais. O enredo centra-se em um grupo de sobreviventes que busca um novo começo em um planeta recém-descoberto chamado Athas, que se acredita ter condições habitáveis.
                <br />
                Os personagens principais incluem uma cientista brilhante, um ex-soldado, um engenheiro talentoso e uma jovem com habilidades especiais. Eles enfrentam inúmeros obstáculos durante a jornada, incluindo traições, dificuldades técnicas e a ameaça de criaturas nativas de Athas. Ao longo do filme, são explorados temas como sobrevivência, sacrifício, esperança e a natureza humana em situações extremas.
                <br />
                A missão se revela mais complexa do que esperavam, forçando o grupo a trabalhar em conjunto e a fazer escolhas difíceis para garantir a sobrevivência da raça humana. No final, o filme deixa uma mensagem sobre a resiliência humana e a importância de se adaptar e colaborar para superar adversidades.
                </p>

                <Button title="Excluir nota" />

            </Content>
        </Container>
    );
};