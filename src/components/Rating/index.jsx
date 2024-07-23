import { Container } from "./stylas";

import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";

export function Rating(){
    return(
        <Container>
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStar />
        </Container>
    );
};