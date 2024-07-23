import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

export function Profile(){
    return(
        <Container>
            <Link to="/">
                <ButtonText icon={FiArrowLeft} title="Voltar" />
            </Link>

            <Form>
                <Avatar>
                    <img src="https://github.com/LaraSmadeski.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" title="file" />
                    </label>
                </Avatar>

                <Input placeholder="nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />

                <button>Salvar</button>
            </Form>
        </Container>
    );
};