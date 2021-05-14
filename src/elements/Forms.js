import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Colors = {
    border: "#0075ff",
    error: "#bb2929",
    errorsoft: "#f66060",
    check: "#1ed12d"
};

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.check === 'false' && css`
        color: ${Colors.error}
    `}
`;

const GroupInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 5px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${Colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.check === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.check === 'false' && css`
        border: 3px solid ${Colors.error} !important;
    `}
`;

const TextError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${Colors.error};
    display: none;

    ${props => props.check === 'true' && css`
        display: none;
    `}

    ${props => props.check === 'false' && css`
        display: block;
    `}
`;

const IconValidation = styled(FontAwesomeIcon)`
    position absolute;
    right 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.check === 'false' && css`
        opacity: 1;
        color: ${Colors.error}
    `}
    ${props => props.check === 'true' && css`
        opacity: 1;
        color: ${Colors.check}
    `}
`;

const Terms = styled.div`
    grid-column: span 2;

    input{
        margin-right: 10px;
    }

    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const ContentButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
`;

const TextCheck = styled.p`
    font-size: 14px;
    color: ${Colors.check};
    font-weight: bold;
`;

const TextError2 = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${Colors.errorsoft};
    padding: 0px 15px;
    border-radius: 5px;
    grid-column: span 2;

    p{
        margin: 0;
    }
    b{
        margin: 0 10px;
    }
`;

export {Colors, Form, Label, GroupInput, Input, TextError, IconValidation, Terms, ContentButton, Button, TextCheck, TextError2};