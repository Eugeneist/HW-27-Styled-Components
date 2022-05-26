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
    ${(props) => {
        switch (props.size) {
            case "large":
                return `
                    width: 103px;
                `
            case "medium":
                return `
                    width: 98px;
                `
            case "small":
                return `
                    width: 90px;
                    height: 40px;
                    padding: 8px 16px;
                `
            default:
                return `
                    width: 98px;
                `
        }
    }};
`;

const StyledSecondaryButton = styled(StyledButton)`
    border: 1px solid #605DEC;
    background: #fff;
    color: #605DEC;

    :hover {
        background: #E9E8FC;
    }

    :disabled {
        background: #fff;
        border: 1px solid #7C8DB0;
        color:#7C8DB0;
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

    :disabled {
        background: rgba(203, 212, 230, 0.3);
        border: 1px solid #7C8DB0;
        color:#7C8DB0;
    }

`;


const Button = ({ children, color, size, disabled, background, border }) => {

    if (color === "secondary") {
        return <StyledSecondaryButton size={size} disabled={disabled}>{children}</StyledSecondaryButton>;
    }

    if (color === "primary") {
        return <StyledPrimaryButton size={size} disabled={disabled}>{children}</StyledPrimaryButton>;
    }

    return <StyledButton size={size} color={color} background={background} border={border} disabled={disabled}>{children}</StyledButton>;
}

export default Button;