import { useState, useEffect, MouseEvent } from 'react'
import Tux from './assets/img/tux.svg'
import Cactus from './assets/img/cactus.png'
import Controller from './assets/img/controller.png'
import Keyboard from './assets/img/keyboard.png'
import Welcome from './components/layout/Welcome'
import TopMenu from './components/layout/TopMenu'
import Resume from './components/resume/Resume'

function App() {
    const [currentWindow, setCurrentWindow] = useState('Slava Trofimov')
    const [showWelcome, setShowWelcome] = useState(false)
    const [showHelloDialog, setShowHelloDialog] = useState(false)
    const [showDesktop, setShowDesktop] = useState(false)
    const [showGame, setShowGame] = useState(false)
    const [showTerminal, setShowTerminal] = useState(false)
    const [showResume, setShowResume] = useState(false)

    const desktopItems = [
        {
            name: 'terminal',
            title: 'Terminal'
        },
        {
            name: 'game',
            title: 'Game'
        },
        {
            name: 'resume',
            title: 'Resume'
        },
    ]


    const switchWindow = (event: React.MouseEvent<HTMLDivElement>) => {
        const name = event.currentTarget.dataset.name
        if(!name) return
        switch(name) {
            case 'terminal':
                setShowGame(false)
                setShowDesktop(false)
                setShowResume(false)
                setShowTerminal(true)
                setCurrentWindow('Terminal')
                break
            case 'game':
                setShowGame(true)
                setShowDesktop(false)
                setShowResume(false)
                setShowTerminal(false)
                setCurrentWindow('Game of resume')
                break
            case 'resume':
                setShowGame(false)
                setShowDesktop(false)
                setShowResume(true)
                setShowTerminal(false)
                setCurrentWindow('Resume.pdf')
                break
            case 'desktop':
                setShowGame(false)
                setShowDesktop(true)
                setShowResume(false)
                setShowTerminal(false)
                setShowHelloDialog(false)
                setCurrentWindow('Slava Trofimov')
                break
        }
    }

    function DialogWindow(): JSX.Element {
        const hideHelloDialog = (event: React.MouseEvent<HTMLDivElement>) => {
            setShowHelloDialog(false)
        }
        return (
            <div className="desktop-dialog hide-mobile">
                <div className="close-dialog" onClick={hideHelloDialog}>x</div>
                <div className="desktop-dialog__content">
                    <h3>Hello!</h3>
                    <p>My name is Slava Trofimov and I am a Web developer.</p>
                    <p>This website represents information about me in several different ways:</p>
                    <ul>
                        <li>as a simple terminal application where you will need to type in commands to get content on a specific topic about me</li>
                        <li>as a small game where you can walk around and chat with NPCs, etc.</li>
                        <li>old-fashion resume (downloadable)</li>
                    </ul>
                    <p></p>
                    <p>Source code for this website you can find on my <a href="https://github.com/pmbstyle">Git Profile</a> page.</p>
                    <p>Feel free to contact me if you have any questions or offers.<br/>
                    Thank you for visiting, have a nice day!</p>
                </div>
            </div>
        )
    }

    useEffect(() => {
        setShowWelcome(true)
        setTimeout(() => {
            setShowWelcome(false)
            setShowDesktop(true)
            setShowHelloDialog(true)
        }, 2000)
    }, []);

    return (
        <>
            <main className="h-full w-full h-full relative">
            <div className="container mx-auto flex flex-col h-full justify-center relative z-20">
                <div id="monitor" className="relative">
                    <img src={Cactus} className="cactus" />
                    { showGame && <img src={Controller} className="controller"/> }
                    { showTerminal && <img src={Keyboard} className="keyboard"/> }
                    <div className="monitor-screen flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
                        <TopMenu currentWindow={currentWindow}/>
                        { showWelcome && <Welcome/> }
                        { showDesktop && (
                            <div className="desktop absolute z-10 w-full h-full">
                                {desktopItems.map((item, index) => (
                                    <div key={index} className={'desktop-item item-'+item.name} data-name={item.name} onClick={switchWindow}>
                                        <div className="icon"></div>
                                        <div className="name">{item.title}</div>
                                    </div>
                                ))}
                                { showHelloDialog && <DialogWindow/>}
                            </div>
                        )}
                        { showResume && <Resume switchWindow={switchWindow}/> }
                    </div>
                    <div className="monitor-screen-bottom bg-gradient-to-t from-slate-300 to-slate-200">
                        <img src={Tux} className="tux"/>
                    </div>
                    <div className="monitor-stand"></div>
                    <div className="monitor-base drop-shadow-xl"></div>
                </div>
                </div>
                <div className="table absolute z-10 w-full bg-gradient-to-tr from-gray-900 to-gray-800"></div>
            </main>
        </>
    )
}

export default App
