import React from "react"
import PerfectScrollbar from 'react-perfect-scrollbar'
import scarecrow from '../../assets/game/npc/scarecrow.png'
import mailbox from '../../assets/game/npc/mailbox.png'
import stand from '../../assets/game/npc/stand.png'
import statue from '../../assets/game/npc/statue.png'
import blacksmith from '../../assets/game/npc/blacksmith-solo.png'

interface DialogueProps {
    type: string,
    toggleDialogue: Function
}
interface Dictionary<T> {
    [key: string]: T;
}

const content:Dictionary<string> = {
	statue: `<p><strong>Hello traveler!</strong></p>
	<p>Here is a letter that I found in that box:</p>
	<p>"My name is Slava Trofimov, I'm a Web Developer from Toronto, Canada.</p>
	<p>I have more than 12 years of experience as a Front End Developer and 2+ years as a Full Stack Developer.<br/>
	Experienced in several high-traffic projects from educational to real-time data management and social networks.</p>
	<p>I specialize in all aspects of web development from basic HTML/CSS/JS coding to creating full-scale web applications with rich REST API(PHP/NodeJs).</br>
	A fast learner, problem solver, and team player, always seeking skill improvement and better practices.</p>
	<p>On free time I prefer:</p>
	<ul>
		<li>Web development =)</li>
		<li>Video games</li>
		<li>Astronomy and astrophotography</li>
		<li>Music</li>
		<li>Outdoors</li>
	</ul>
	<p>Always interested in new technologies and opportunities.</p>
	<p>I hope you enjoy this site, and if you have any questions, please feel free to contact me.</p>
	<p>Have a nice day! :)"</p>`,
	blacksmith: `<p><strong>Hello traveler!</strong></p>
	<p>I'll tell you a little about Slava's skills.</p>
	<p>His primary stack is <strong>Laravel + Vue / React</strong>.<br/>
	He is using <strong>SCSS, LESS, TailwindCSS, Bootstrap</strong>, etc.,
	compiling with <strong>Vite, Webpack</strong> and <strong>Gulp</strong>.</p>
	<p>Have a wide experience with many frameworks,libraries and platforms, such as:<br/>
	<strong>Node.js, WordPress, Electron, Opencart, jQuery</strong>, etc.</p>
	<p>He is working with <strong>PHP, JavaScript, TypeScript</strong>, connecting all of it to <strong>MySQL, MongoDB, SQLite</strong>, etc.</p>
	<p>Version control with <strong>Github</strong> and <strong>BitBucket</strong>.<br/>
	He is using <strong>Docker</strong> for local development.<br/>
	Task management in <strong>Jira, ClickUp</strong>.<br/>
	Using <strong>Linux/Mac/Windows</strong> on a daily basis.</p>`,
	scarecrow: `<p><strong>Hello traveler!</strong></p>
	<p>Here you can find Slava's experience.</p>
	<p>Last 5 years of experience, for more information please check out Slava's <strong><a href="https://www.linkedin.com/in/slava-trofimov-a1b919128/">LinkedIn</a></strong> profile or Resume section.</p>
	<p><strong><u>Senior Front End Developer</u></strong><br/>
	Codepxl (Toronto, Canada)<br/><i>Jan 2019 - Present</i></p>
	<ul><li>Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.</li><li>Formed a team for a particular project needs, estimated and planned development process close with Product Manager.</li><li>Coded using Vue.js/React.js to develop features for both mobile and desktop platforms.</li><li>Transformed native applications designs into desktop and mobile-friendly SPA/SSR products.</li><li>Produced websites based on Laravel or WordPress compatible with multiple browsers and platforms.</li><li>Improved tools to boost user interaction and deliver design versatility.</li></ul>
	<p><strong><u>Front End Developer</u></strong><br/>
	EvolutionInDesignZ (Toronto, Canada)<br/><i>May 2018 - Dec 2018</i></p>
	<ul><li>Coded using HTML, CSS/SCSS and JavaScript(Vue.js) to develop features for both mobile and desktop platforms.</li><li>Contributed to projects within Scrum project management environments.</li><li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li><li>Worked cooperatively with client services, sales and design team in deadline-driven environment.</li><li>Designed and updated layouts to meet usability and performance requirements.</li><li>Produced websites compatible with multiple browsers.</li></ul>`,
	stand: `<p><strong>Hello traveler!</strong></p>
	<p>Here you can find Slava's education.</p>
	<p><strong><u>Master in Computer Science</u></strong><br/>
	Moscow Technological University<br/><i>2007 - 2008</i></p>
	<p><strong><u>Diploma in Computer Science</u></strong><br/>
	Moscow Technological University<br/><i>2003 - 2007</i></p>`,
	mailbox: `<p><strong>Hello traveler!</strong></p>
	<p>Here you can find Slava's contacts.</p>
	<p>His email is <strong> <a href="mailto:slava@trofimov.ca">slava@trofimov.ca</a></strong>.</p>
	<p>You can also find him on <strong><a href="https://www.linkedin.com/in/slava-trofimov-a1b919128/">LinkedIn</a></strong>.</p>
	<p>GitHub: <strong><a href="https://github.com/pmbstyle">pmbstyle</a></strong>.</p>
	<p>Facebook: <strong><a href="https://www.facebook.com/vyacheslav.pmb">Slava Trofimov</a></strong>.</p>`,
}

const icon = (type:string) => {
    switch(type) {
        case 'statue': return statue
        case 'blacksmith': return blacksmith
        case 'scarecrow': return scarecrow
        case 'stand': return stand
        case 'mailbox': return mailbox
        default: return statue
    }
}

const name = (type:string) => {
    switch(type) {
        case 'statue': return 'Statue'
        case 'blacksmith': return 'Blacksmith'
        case 'scarecrow': return 'Scarecrow'
        case 'stand': return 'Bulletin board'
        case 'mailbox': return 'Mailbox'
    }
}

class Dialogue extends React.Component<DialogueProps> {
    render(): React.ReactNode {
        return (
            <div className="game-dialog">
                <div className="close-dialog" onClick={(event) => this.props.toggleDialogue('')}>x</div>
                <div className="game-dialog__icon">
                    <img src={ icon(this.props.type) } alt="icon" />
                </div>
                <div className="game-dialog__title">{ name(this.props.type) }</div>
                <PerfectScrollbar>
                    <div className="game-dialog__content" dangerouslySetInnerHTML={{ __html: content[this.props.type] }}/>
                </PerfectScrollbar>
            </div>
        );
    }
}

export default Dialogue;