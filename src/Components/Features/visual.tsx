
type VisualProps = {
    children:React.ReactNode;
}


const Visual = ({children }:VisualProps) => {
    return <div>{children}</div>
}


const MusicVisual = () => {
    return <Visual><img src = "" /></Visual>
}