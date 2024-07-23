import { Container, Search, Logout, Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <input placeholder="Pesquisar pelo título" />
            </Search>

            <Profile>
                <strong>Lara Smadeski</strong>
                <img src="https:/github.com/larasmadeski.png" alt="" />
            </Profile>
            <Logout>
                <span>sair</span>
            </Logout>
        </Container>
    )
}