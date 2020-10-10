import styled, {
    createGlobalStyle
} from 'styled-components';
import themeProp from './components/utils/theme';
import {
    theme
} from './app/theme/default_theme';
import {
    transition
} from './components/utils/style-util';

const {fonts, button} = theme;

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: ${fonts.family.primary};
        font-size: ${fonts.size.xxs};
        color: ${fonts.color.primary}
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        display: inline-block;
    }
`;

const buttonTransition = transition(.3);

export const ButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    minWidth: '80px',
    textAlign: 'center',
    padding: `${button.padding}`,
    border: 0,
    borderRadius: `${button.radius}`,
    backgroundColor: `${button.background}`,
    color: `${button.color}`,
    fontSize: `${button.fontSize}`,
    cursor: 'pointer',
    buttonTransition
}

export const ButtonHover = {
    backgroundColor: `${button.hoverBackground}`
}

export const Container = styled.div`
    width: 100%;
    max-width: ${themeProp('common', 'containerWidth')};
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media only screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
    align-items: ${props => props.alignItems};
`;

export const Column = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    align-self: ${props => props.alignSelf}
`;