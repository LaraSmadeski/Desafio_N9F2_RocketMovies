import { Link } from "react-router-dom";

import { Container, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar"/>
                </Link>

                <Content>
                    <h1>Novo filme</h1>

                    <div className="top">
                        <input placeholder="Título" />
                        <input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className="tags">
                            <NewTag  value="Ação" />
                            <NewTag  isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <div className="buttons">
                        <button>Excluir filme</button>
                        <Button title="Salvar"></Button>
                    </div>
                </Content>
            </main>
        </Container>
    );
};