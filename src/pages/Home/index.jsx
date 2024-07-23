import { Container, Content } from "./styles";
import { HiPlus } from "react-icons/hi2";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

export function Home(){
    return(
        <Container>
            <Header />
            <main>
                <div className="top">
                    <h1>Meus filmes</h1>
                    <button>
                        <HiPlus />
                        Adicionar filme
                    </button>
                </div>

                <Content>
                    <Note />
                </Content>
            </main>
        </Container>
    );
};