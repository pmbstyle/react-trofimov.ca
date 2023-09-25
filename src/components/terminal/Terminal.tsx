import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentCommand, addHistory } from '../../store/terminalSlice'
import PerfectScrollbar from 'react-perfect-scrollbar'
import TerminalHistory from './TerminalHistory'
import TerminalInput from './TerminalInput'



const Terminal = (props:{switchWindow:Function}) => {
    const scrollBottom = () => {
        const terminalFlow = document.querySelector('#terminalFlow .scrollbar-container')
        if(terminalFlow) {
            terminalFlow.scrollTop = terminalFlow.scrollHeight - terminalFlow.clientHeight
        }
    }
    const state = useSelector((state: any) => state)
    return (
        <div className="mockup-window border bg-base-300 flex-1 mt-10 mb-5 ml-5 mr-5 drop-shadow-md absolute z-20 show">
            <div className="window-header">
                <div className="close-window" data-name="desktop" onClick={(event) => props.switchWindow(event)}>x</div>
                <div className="minimize-window" data-name="desktop" onClick={(event) => props.switchWindow(event)}>–</div>
                <div className="maximize-window">□</div>
            </div>
            <div className="flex w-full justify-left px-4 py-6 bg-base-200 terminal-wrapper relative">
                <div className="terminal w-full" id="terminalFlow">
                    <PerfectScrollbar>
                        { state.showHeader && 
                            <div className="term-header" dangerouslySetInnerHTML={{ __html: state.header }}></div>
                        }
                        <TerminalHistory/>
                        <TerminalInput scrollBottom={scrollBottom}/>
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    )
}

export default Terminal