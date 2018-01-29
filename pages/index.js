import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import MapMyRepsLogo from '../components/MapMyRepsLogo.js'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/lib/fa'

const IconSize = 30


class IndexPage extends React.Component {

  componentDidMount() {
    console.log('mounted!')
  }

  render() {
    return (
      <Layout>
        <div className="main">
          <div className="sub">
            <section>
              <div className="title">
                <h1>Ted Lorts</h1>
                <h2>Software Product Engineer</h2>
                <h3>Web & Mobile, Full Stack</h3>
              </div>
              <div className="links">
                <a href="mailto:contact@theodoria.software">
                  <FaEnvelope size={IconSize} />
                </a>
                <a href="https://github.com/tplorts" target="_blank">
                  <FaGithub size={IconSize} />
                </a>
                <a href="https://www.linkedin.com/in/ted-lorts-908a9584/" target="_blank">
                  <FaLinkedin size={IconSize} />
                </a>
              </div>
            </section>

            <section>
              <h3>Recent Work</h3>
              <ul className="projects">
                <li>
                  <a href="http://mapmyreps.us" target="_blank" className="mapmyreps">
                    <MapMyRepsLogo />
                  </a>
                  <p>Map My Reps is a clean & simple interactive map view of the USA to clearly display Senators and Representatives from each state, along with details and links for each Congressperson.</p>
                </li>
                <li>
                  <a href="http://word-search.theodoria.software" target="_blank" className="word-search">
                    <h4>Word Search</h4>
                  </a>
                  <p>This word search web app can automatically generate word searches given a desired grid size and a list of words.  It can then be played in the browser.  I built this app as a fun project to get more familiar with the latest version of the angular.</p>
                </li>
              </ul>
            </section>

          </div>
        </div>
        <style jsx>{`
          .main {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
          .sub {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
          }
          section {
            margin: 2em;
          }
          a, a:visited {
            text-decoration: none;
            color: inherit;
          }
          .title > * {
            font-weight: normal;
          }
          .links {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: repeat(auto-fit, ${IconSize}px);
          }
          a {
            transition: color 0.2s;
          }
          a:hover {
            color: #080;
          }
          a.mapmyreps {
            width: 100%;
            max-width: 12rem;
            display: block;
          }
          p {
            margin: 0.5rem 0;
          }
          ul.projects {
            list-style: none;
            padding: 0;
          }
          .projects li {
            margin: 2rem 0;
            padding-left: 1rem;
            border-left: 2px solid;
          }
          .projects h4 {
            margin: 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default IndexPage
