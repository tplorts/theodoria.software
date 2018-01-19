import Layout from '../components/Layout.js'
import Link from 'next/link'

import { FaGithub, FaLinkedin } from 'react-icons/lib/fa'

const IconSize = 30

export default (props) => (
  <Layout>
    <div className="main">
      <div className="sub">
        <section>
          <h1>Ted Lorts</h1>
          <h2>Software Product Engineer</h2>
          <h3>Web & Mobile, Full Stack</h3>
          <div className="links">
            <a href="https://github.com/tplorts" target="_blank">
              <FaGithub size={IconSize} />
            </a>
            <a href="https://www.linkedin.com/in/ted-lorts-908a9584/" target="_blank">
              <FaLinkedin size={IconSize} />
            </a>
          </div>
        </section>

        <section>
          <h2>Recent Work</h2>
          <div>
            <a href="http://mapmyreps.us" target="_blank" className="mapmyreps">
              <h4>Map My Reps</h4>
            </a>
          </div>
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
    `}</style>
  </Layout>
)
