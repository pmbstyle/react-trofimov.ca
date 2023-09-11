import React, { useRef } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { staticHeader, showHeader } from '../../store/terminal'
import TerminalHistory from './TerminalHistory'

interface TerminalProps {
    switchWindow: Function
}

const termScroll = {}
const scrollBottom = (termScroll:object) => {
    termScroll.current.scrollTop = termScroll.current.scrollHeight
}

class Terminal extends React.Component<TerminalProps> {
    render(): React.ReactNode {
        return (
            <div className="terminal w-full">
                <PerfectScrollbar>
                    { showHeader && 
                        <div className="term-header" dangerouslySetInnerHTML={{ __html: staticHeader }}>
                            <TerminalHistory/>
                        </div>
                    }
                </PerfectScrollbar>
            </div>
        );
    }
}

export default Terminal