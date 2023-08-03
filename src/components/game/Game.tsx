import React, { useState, useEffect } from 'react'
import * as Phaser from 'phaser'
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin"
import MainScene from "./scenes/MainScene"
import Deialogue from "./Dialogue"
import Dialogue from './Dialogue'

interface GameProps {
    switchWindow: Function
}

const config = {
    type: Phaser.AUTO,
    width:768,
    height:500,
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        MainScene
    ],
    parent: 'game',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: false
        }
    },
    transparent: true,
    autoFocus: true,
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

const GameRenderer = () => {
    useEffect(() => {
        const game = new Phaser.Game(config)
        return () => {
            game.destroy(true)
        }
    }, [])
    return <div id="game" className="game w-full overflow-hidden"></div>
}

const Game = (): JSX.Element => {
    const [activeDialogue, setActiveDialogue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveDialogue(event.target.value)
    }
    const toggleDialogue = (type:string) => {
        console.log('type recieved',type)
        if(typeof type == undefined) return
        setActiveDialogue(type)
    }
    return (
        <div className="game mockup-window border bg-base-300 flex-1 mt-10 mb-5 ml-5 mr-5 drop-shadow-md absolute z-20 show">
            <div className="window-header">
                <div className="close-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>x</div>
                <div className="minimize-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>–</div>
                <div className="maximize-window">□</div>
            </div>
            <div className="flex justify-left bg-base-200 game-wrapper relative">
                <div className="game-controls absolute mt-5 ml-5 text-left">
                    <p>Movement: [W], [A], [S], [D]</p>
                    <p>Action: [SPACEBAR]</p>
                </div>
                <GameRenderer />
                { activeDialogue.length > 0 && <Dialogue type={activeDialogue} toggleDialogue={toggleDialogue}/> }
                <input type="text" className="hidden" id="activeInput" value={activeDialogue} onChange={(e) => handleChange(e)}/>
            </div>
        </div>
    )
}

export default Game