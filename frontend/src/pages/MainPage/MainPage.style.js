import styled from "styled-components";
import { colors } from "styles/variables";

export const Slide = styled.div`
    width: 100%;
    scroll-snap-type: y mandatory;
    max-height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: row;
`;

export const Cont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const Page = styled.div`
    scroll-snap-align: center;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 70px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    background: ${colors.blackColor};
`;

export const Side = styled.div`
    position: static;
    
    height: 100vh;
    width: 15%;
    background: ${colors.blackColor};
    
    
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;