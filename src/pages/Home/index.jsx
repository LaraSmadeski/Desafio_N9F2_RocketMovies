import { Container, NewNote } from "./styles";
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
                    <NewNote to="/new">
                        <HiPlus />
                        Adicionar filme
                    </NewNote>
                </div>
                    <Note />
            </main>
        </Container>
    );
};