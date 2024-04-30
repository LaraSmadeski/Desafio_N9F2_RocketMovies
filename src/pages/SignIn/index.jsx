import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';

import { Container, Form, Background } from './styles';

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

                <button>Entrar</button>

                <div>
                    <Link to="/register">Criar conta</Link>
                </div>
            </Form>

            <Background />
        </Container>
    )
}