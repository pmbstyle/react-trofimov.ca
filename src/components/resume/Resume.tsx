import React from "react"
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import pdf from '../../assets/Slava_Trofimov_Front_End(Full_Stack)_Developer.pdf'

interface ResumeProps {
    switchWindow: Function
}

const experience = [
    {
        title: 'Senior Front End Developer',
        company: 'Codepxl - Toronto, ON',
        date: 'January 2019 to Present',
        description:`
        <p>Front End and Full Stack development using Vue, Nuxt, Laravel,
        WordPress, jQuery, and Vanilla Javascript. Styling based on Figma
        designs with HTML5, CSS3 (SASS), and TailwindCSS/Bootstrap.</p>
        <p>Single page and Progressive Web Applications development,
        project planning, structuring, maintaining legacy code, and
        mentoring.</p>`
    },
    {
        title: 'Front End Developer',
        company: 'eQuoto, - Toronto, ON',
        date: 'November 2018 to November 2019',
        description: `
        <p>Worked on a wide variety of marketing websites based on Laravel
        and WordPress. Used Vue, React, Bootstrap and Tailwindcss.</p>`
    },
    {
        title: 'Front End Developer',
        company: 'EvolutionInDesignZ - Toronto, ON',
        date: 'May 2018 to December 2018',
        description: `
        <p>Worked on many different custom Laravel, WordPress and
        Opencart-based real-estate, educational, non-profit, large-data,
        and thin-client projects. Implemented Figma/Sketch designs into
        cross- platform accessible and SEO-friendly front-end code using
        HTML5/SASS, JavaScript, Vue, Laravel blade, jQuery, and Bootstrap.</p>`
    },
    {
        title: 'Web Developer',
        company: 'Electrolight Ent. - Toronto, ON',
        date: 'August 2017 to May 2018',
        description: `
        <p>Developed and maintained custom corporate websites based on
        WordPress and Opencart using HTML5/CSS3, JavaScript, and
        jQuery. Integrated third-party APIs, converted mockups into UI, and
        improved SEO and web accessibility. Implemented content
        management and security resource tutorials to assist end-user
        training.</p>`
    },
    {
        title: 'Front End Developer',
        company: 'iMoan - Moscow',
        date: 'August 2015 to July 2017',
        description: `
        <p>
            Worked cooperatively with client services, sales, and design teams
            in a deadline-driven environment. Developed e-commerce
            websites based on Opencart and Django framework using
            HTML5/LESS, jQuery, PHP, and Python.<br/>
            Designed and built landing pages and corporate resources.<br/>
            Improved SEO and UI/UX in general.
        </p>`
    },
    {
        title: 'Front End Developer / Web Designer',
        company: 'Web Solution Ltd. - Moscow',
        date: 'March 2013 to August 2015',
        description: `
        <p>Designed and built a wide variety of websites from small
        WordPress/Joomla-based corporate sites to big e-commerce
        solutions as Front End and Full Stack developer.<br/>
        Implemented front-end interfaces using HTML/CSS, jQuery,
        Bootstrap, and PHP.<br/>
        Made market research and implemented SEO best practices.
        Worked closely with end clients to develop modern and productive
        web applications.</p>`
    }
]

const profile = [
    'HTML5 & CSS3 for precise styling',
    'JavaScript/TypeScript (with or without frameworks)',
    'JavaScript Frameworks (Vue.js, Nuxt.js), Libraries (React.js, jQuery)',
    'Mobile-first, pixel-perfect styling',
    'SPA, PWA, SSR development',
    'CSS Preprocessors (SASS, LESS) and Template Engines (Laravel Blade, PUG)',
    'RESTful Service and Third-Party API interaction',
    'Unit Testing (Jest), Debugging, Application Maintenance',
    'Desktop App Development (Electron.js)',
    'Web Accessibility (WCAG) and SEO Best Practices',
    'Full Stack Development (Laravel, WordPress, Node.js)',
    'Git/Version Control, Pull Requests, Code Reviews'
]

const education = [
    {
        title: 'Master in Computer Science',
        place: 'Moscow State Open University',
        date: '2003 to 2008'
    }
]

const skills = [
    'Vue.js / Nuxt.js (5 years)',
    'React.js / Next.js (1 year)',
    'HTML5 / SCSS (8 years)',
    'Bootstrap / Tailwindcss (5 years)',
    'Javascript (8 years)',
    'REST (6 years)',
    'jQuery (7 years)',
    'Laravel / PHP (3 years)',
    'MySQL/ MangoDB (6 years)',
    'Node.js (3 years)',
    'TypeScript (2 years)',
    'Responsive styling (8 years)',
    'Webpack / Vite / Gulp (5 years)',
    'WordPress / OpenCart (8 years)',
    'GitHub (6 years)',
    'Docker (4 years)'
]

class Resume extends React.Component<ResumeProps> {
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
                                <p>Front End Developer with strong expertise in JavaScript, Vue.js, REST, and HTML5/SCSS.
                                Bring a Full Stack skill set, having worked extensively with Laravel and PHP, contributing to numerous
                                Laravel+Vue.js/Nuxt.js projects. I'm also proficient in React.js, WordPress, Opencart, and Electron.js.
                                Well-versed in essential development tools like Git and Docker and have experience with collaboration
                                platforms such as Figma, Jira/ClickUp, and Slack. Dedication to ongoing enhancement and a knack for
                                resolving challenges add value to any development environment.</p>
                            </section>

                            <section>
                                <p className="dashed"><strong>Work Profile</strong></p>
                                <ul>
                                    {
                                        profile.map((p, index) => {
                                            return (
                                                <li key={index}>{p}</li>
                                            )
                                        })
                                    }
                                </ul>
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
                                                <div dangerouslySetInnerHTML={{__html: e.description}}></div>
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
                                <p className="dashed"><strong>Technical Profile</strong></p>
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
                                <p className="dashed"><strong>Competencies</strong></p>
                                <ul>
                                    <li>Effective communication</li>
                                    <li>Team player</li>
                                    <li>Strong problem solver</li>
                                    <li>Good time management</li>
                                </ul>
                            </section>

                            <section>
                                <p className="dashed"><strong>Interests</strong></p>
                                <ul>
                                    <li>Astrophotography</li>
                                    <li>Video games</li>
                                    <li>Travelling</li>
                                    <li>Music</li>
                                </ul>
                            </section>

                            <section>
                                <p className="dashed"><strong>Languages</strong></p>
                                <ul>
                                    <li>
                                        English - Fluent
                                    </li>
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