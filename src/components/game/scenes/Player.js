import playerPng from '../../../assets/game/npc/player.png'
import playerAtlas from '../../../assets/game/npc/player_atlas.json'
import playerAnimation from '../../../assets/game/npc/player_anim.json'

export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(data) {
        let { scene, x, y, texture, frame } = data
        super(scene.matter.world, x, y, texture, frame)
        this.scene.add.existing(this)

        const { Body, Bodies } = Phaser.Physics.Matter.Matter
        var playerCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'playerCollider' })
        var playerSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'playerSensor' })
        const compoundBody = Body.create({
            parts: [playerCollider, playerSensor],
            frictionAir: 0.35,
        })
        this.setExistingBody(compoundBody)
        this.setFixedRotation()
    }

    static preload(scene) {
        scene.load.atlas('player', playerPng, playerAtlas)
        scene.load.animation('player_anim', playerAnimation)
    }

    get velocity() {
        return this.body.velocity
    }

    update() {
		const speed = 2.5
		let playerVelocity = new Phaser.Math.Vector2()
		if (this.inputKeys.left.isDown) {
			playerVelocity.x = -speed
		}
		if (this.inputKeys.right.isDown) {
			playerVelocity.x = speed
		}
		if (this.inputKeys.up.isDown) {
			playerVelocity.y = -speed
		}
		if (this.inputKeys.down.isDown) {
			playerVelocity.y = speed
		}
		playerVelocity.normalize()
		playerVelocity.scale(speed)
		this.setVelocity(playerVelocity.x, playerVelocity.y)
        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
            this.anims.play('walk', true)
        } else {
            this.anims.play('idle', true)
        }

        let npcs = ['blacksmith', 'scarecrow', 'mailbox', 'stand', 'statue']
        npcs.forEach(npc => {
            let npcBody = this.scene[npc].body
            let playerSensor = this.body.parts[1]
            let npcCollision = this.scene.matter.overlap(playerSensor, npcBody)
            if(npcCollision && Phaser.Input.Keyboard.JustDown(this.inputKeys.space)) {
                let activeDialog = document.getElementById('activeInput')
                let lastValue = activeDialog.value
                activeDialog.value = npc
                let event = new Event("input", { target: activeDialog, bubbles: true });
                // React 15
                event.simulated = true;
                // React 16
                let tracker = activeDialog._valueTracker;
                if (tracker) {
                    tracker.setValue(lastValue);
                }
                activeDialog.dispatchEvent(event);
                console.log('sent',activeDialog.value)
            }
        })
	}
}