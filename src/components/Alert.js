import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledAlert = styled.div`
    width: 1440px;
    padding: 16px 32px;
    text-align: center;
    position: relative;
    ${(props) => {
    switch (props.color) {
        case "primary":
            return `
                background: #605DEC;
                color:#fff;
            `
        case "warning":
            return `
                background: #FFD12F;
                color:#fff;
            `
        case "error":
            return `
                background: #EB5757;
                color:#1513A0;
            `
    }
}};
`;

const StyledCloseButton = styled.button`
    width: 16px;
    height: 16px;
    background: transparent;
    position: absolute;
    right: 50px;
    top: 20px;
    border: none;
    cursor: pointer;

::before,
::after {
	content: '';
	position: absolute;
	top: 7px;
    right: -1px;
	display: block;
	width: 16px;
    height: 2px;
	background: #000;
    background-color: #fff;
}

::before {
	transform: rotate(45deg);
}

::after {
	transform: rotate(-45deg);
}
`;

const Alert = ({children, color, onClose}) => {
    return <StyledAlert color={color}>{children} <StyledCloseButton onClick={onClose}></StyledCloseButton> </StyledAlert>;
    
}

Alert.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Alert;