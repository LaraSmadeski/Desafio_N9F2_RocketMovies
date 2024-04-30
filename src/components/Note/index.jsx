import { RiStarFill, RiStarLine } from 'react-icons/ri';

import { Container } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </div>
            <p>{data.p}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}