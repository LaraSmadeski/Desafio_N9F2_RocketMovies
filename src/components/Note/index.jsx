import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function Note(){
    return(
        <Container>
            <h1>Atlas (2024)</h1>
            <Rating />
            <p>"Athas" é um filme de ficção científica que se passa em um futuro distópico onde a humanidade enfrenta uma série de desafios ambientais e sociais. O enredo centra-se em um grupo de sobreviventes que busca um novo começo em um planeta recém-descoberto chamado Athas, que se acredita ter condições habitáveis.
                <br />
                Os personagens principais incluem uma cientista brilhante, um ex-soldado, um engenheiro talentoso e uma jovem com habilidades especiais. Eles enfrentam inúmeros obstáculos durante a jornada, incluindo traições, dificuldades técnicas e a ameaça de criaturas nativas de Athas. Ao longo do filme, são explorados temas como sobrevivência, sacrifício, esperança e a natureza humana em situações extremas.
                <br />
                A missão se revela mais complexa do que esperavam, forçando o grupo a trabalhar em conjunto e a fazer escolhas difíceis para garantir a sobrevivência da raça humana. No final, o filme deixa uma mensagem sobre a resiliência humana e a importância de se adaptar e colaborar para superar adversidades.
            </p>

            <div className="tag">
                <Tag title="Ficção Científica" />
                <Tag title="Ação" />
            </div>
        </Container>
    );
};