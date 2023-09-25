import { useSelector } from 'react-redux'
import config from "../../config"

interface TerminalCommandProps {
    children: JSX.Element
}

const TerminalCommand = ({children}:TerminalCommandProps): JSX.Element => {
    const state = useSelector((state: any) => state)
    return (
        <div className="command-container">
            <div className="command-prefix">
                <span className="user-info"> { config.terminal.visitorUsername }@{ config.info.domain } </span>
                <span className="user-sep">{ ":" }</span>
                <span className="user-path"> { state.pwd } </span>
            </div>
            <div className="command-slot">
                {children}
            </div>
        </div>
    );
}

export default TerminalCommand