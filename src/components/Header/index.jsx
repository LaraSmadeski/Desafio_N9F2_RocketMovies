import { Container, Search, Profile, Logout } from './styles';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <input placeholder="Pesquisar pelo título" />
            </Search>

            <Profile to="/profile">
                <div>
                    <p>Lara Smadeski</p>
                    <Logout>sair</Logout>
                </div>

                <img src="https://github.com/LaraSmadeski.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}