
export default function Tabs({buttons, children, ButtonContainer="menu"}) {
    
    return (
        <ButtonContainer>
            {buttons}
            {children}
        </ButtonContainer>
    );
}