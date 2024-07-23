import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn(){
    return(
        <Container>
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>
                </header>

                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />

                <Button title="Entrar" />

                <div className="create">
                    <ButtonText title="Criar conta" />
                </div>
            </Form>

            <Background />
        </Container>
    );
};