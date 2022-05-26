import styled from "styled-components";

const StyledButton = styled.button`
    width: 103px;
    height: 48px;
    background: ${(props) => props.background || "#605DEC"};
    border: ${(props) => props.border || "1px solid #605DEC"};
    border-radius: 4px;
    align-items: center;
    padding: 12px 20px;
    color: ${(props) => props.color || "#fff"};
    cursor: pointer;

    :disabled {
        background: rgba(203, 212, 230, 0.3);
        border: 1px solid #7C8DB0;
        color:#7C8DB0;
    }
`;

const StyledSecondaryButton = styled(StyledButton)`
    border: 1px solid #605DEC;
    background: #fff;
    color: #605DEC;

    :disabled {
        background: #fff;
        border: 1px solid #7C8DB0;
        color:#7C8DB0;
    }


    :hover {
        background: #E9E8FC;
    }
`;

const StyledPrimaryButton = styled(StyledButton)`
    border: 1px solid #605DEC;
    background: #605DEC;
    color: #fff;
    

    :hover {
        background: #1513A0;
        border: 1px solid #1513A0;
    }

`;


const Button = ({ children, color, size, disabled, background, border }) => {

    if (color === "secondary") {
        return <StyledSecondaryButton disabled={disabled}>{children}</StyledSecondaryButton>;
    }

    if (color === "primary") {
        return <StyledPrimaryButton disabled={disabled}>{children}</StyledPrimaryButton>;
    }

    return <StyledButton color={color} background={background} border={border} disabled={disabled}>{children}</StyledButton>;
}

export default Button;