import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
    return(
        <Container>
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>
                </header>

                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />

                <button>Cadastrar</button>

                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
                </Link>
            </Form>

            <Background />
        </Container>
    );
};