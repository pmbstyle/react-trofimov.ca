import React from "react"
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import pdf from '../../assets/Slava_Trofimov_Resume(Senior_Front-end_Developer).pdf'

interface GameProps {
    switchWindow: Function
}

const experience = [
    {
        title: 'Senior Front End Developer',
        company: 'Codepxl - Toronto, ON',
        date: 'January 2019 to Present',
        description: `Toronto-based App development, website design, complex system development, and graphic design
        agency. Vue3/Nuxt3, SPA, Laravel, Electron, WordPress.`
    },
    {
        title: 'Front End Developer',
        company: 'EvolutionInDesignZ - Toronto, ON',
        date: 'May 2018 to December 2018',
        description: `Web app development, graphic design, and online marketing agency. HTML5, SCSS, SPA, Laravel +
        Vue.js, Opencart, WordPress`
    },
    {
        title: 'Web Master',
        company: 'Electrolight Enterprises - Toronto, ON',
        date: 'August 2017 to May 2018',
        description: `Lighting & Design Services for the GTA. Corporate website maintenance. HTML5 / JS / SCSS / PHP, etc.`
    },
    {
        title: 'Front End Developer',
        company: 'iMoan.ru - Moscow',
        date: 'August 2015 to July 2017',
        description: `One of the fast-growing e-commerce projects in the adult industry. HTML5 (PUG) / CSS3 (SCSS) / JS(jQuery,
        Angular) / Opencart, Web/UI design, VPS administrative, SEO, project menagment, work with remote employees.`
    },
    {
        title: 'Lead Front End Developer',
        company: 'Web Solution Ltd. - Moscow',
        date: 'March 2013 to August 2015',
        description: `Web design studio with hundreds of clients. Front-end development and UI design. HTML5 (PUG) /CSS
        (LESS) / JS (jQuery) / Joomla, WordPress, Opencart.`
    },
    {
        title: 'Front End Developer',
        company: 'Giftery corp. - Moscow',
        date: 'February 2012 to March 2013',
        description: `Startup Giftery.ru is a buyer's bonus card system with many commerce partners. Front-end development.
        HTML5 / CSS3 / JS (jQuery)`
    },
    {
        title: 'Front End Developer',
        company: 'Predestination.ru - Moscow',
        date: 'January 2011 to February 2012',
        description: `Popular business training project with multiple courses and programs. Front-end development, Web
        design, UI Design. HTML / CSS / JS (jQuery) / WordPress`
    },
    {
        title: 'Junior Front End Developer',
        company: 'KM ONLINE, R-STYLE COMPANY GROUP - Moscow',
        date: '2008 to 2010',
        description: `News, entertainment, and media. Work on social media project - vkrugudruzei.ru. Front-end
        development. HTML / CSS / JS (jQuery)`
    }
]
const education = [
    {
        title: 'Master in Computer Science',
        place: 'Moscow State Open University - Moscow',
        date: '2007 to 2008'
    },
    {
        title: 'Diploma in Computer Science',
        place: 'Moscow Technological University - Moscow',
        date: '2003 to 2007'
    }
]
const skills = [
    'JavaScript (7 years)',
    'Vue.js / Nuxt.js (5 years)',
    'React.js (2 years)',
    'Laravel (4 years)',
    'Node.js (3 years)',
    'TypeScript (2 years)',
    'PHP (5 years)',
    'jQuery (7 years)',
    'REST (6 years)',
    'CSS (10+ years)',
    'SASS (5 years)',
    'HTML5 (10+ years)',
    'Responsive styling (8 years)',
    'Bootstrap (5 years)',
    'TailwindCss (3 years)',
    'MySQL (5 years)',
    'GitHub (6 years)',
    'Docker (4 years)',
    'Webpack (4 years)',
    'Vite (2 year)',
    'Gulp (3 years)'
]

class Resume extends React.Component<GameProps> {
    render() {
        return (
            <div className="mockup-window border bg-base-300 flex-1 mt-10 mb-5 ml-5 mr-5 drop-shadow-md absolute z-20 show">
                <div className="window-header">
                    <div className="close-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>x</div>
                    <div className="minimize-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>–</div>
                    <div className="maximize-window">□</div>
                </div>
                <div className="flex justify-left px-4 py-6 bg-base-200 terminal-wrapper relative">
                    <PerfectScrollbar>
                        <article className="resume">
                            <h1>Slava Trofimov <span>(<a href={pdf} target="_blank">download PDF</a>)</span></h1>
                            <p><strong>Senior Front End Developer</strong><br/>
                            Richmond Hill, ON<br/>
                            <a href="mailto:slava@trofimov.ca">slava@trofimov.ca</a><br/>
                            <a href="tel:2899808683">+1(289)980-8683</a></p>
                            <section>
                                <p>Working in the web development industry for more than 12 years and am familiar with all aspects of a
                                website/app development cycle, from initial analysis and planning, creating wireframes to production
                                deployment.</p>
                                <p>Have strong JavaScript, Vue.js, REST and HTML5/SCSS skills. For the last several years gained wide
                                experience with Laravel and PHP in general and worked on many Laravel+Vue.js/Nuxt.js projects as a Full
                                stack developer. Have experience with React.js, MySQL, WordPress, Opencart, and Electron.js.
                                Feel confident working with technologies like Git, Docker, Figma, Jira / ClickUp, Slack, etc.
                                Always seeking skill improvement and better practices.</p>
                            </section>

                            <section>
                                <p className="dashed"><strong>Work Experience</strong></p>
                                { 
                                    experience.map((e, index) => {
                                        return (
                                            <p key={index}>
                                                <b>{e.title}</b><br/>
                                                <small>{e.company}</small><br/>
                                                <small>{e.date}</small><br/>
                                                {e.description}<br/>
                                            </p>
                                        )
                                    })
                                }
                            </section>

                            <section>
                                <p className="dashed"><strong>Education</strong></p>
                                { 
                                    education.map((e, index) => {
                                        return (
                                            <p key={index}>
                                                <b>{e.title}</b><br/>
                                                <small>{e.place}</small><br/>
                                                <small>{e.date}</small><br/>
                                            </p>
                                        )
                                    })
                                }
                            </section>

                            <section>
                                <p className="dashed"><strong>Skills</strong></p>
                                <ul>
                                    {
                                        skills.map((s,index) => {
                                            return (
                                                <li key={index}>
                                                    {s}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </section>

                            <section>
                                <p className="dashed"><strong>Languages</strong></p>
                                <ul>
                                    <li>English - Fluent</li>
                                    <li>Russian - Expert</li>
                                </ul>
                            </section>
                        </article>
                    </PerfectScrollbar>
                </div>
            </div>
        )
    }
}

export default Resume;