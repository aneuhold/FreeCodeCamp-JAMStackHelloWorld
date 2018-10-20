import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Tony 😁</h1>
    <p>a software engineer <a href="https://en.wikipedia.org/wiki/Jedi#Padawan">padawan</a>. 
    My full name is Anton Neuhold, although feel free to call me Tony. I'm a student at Arizona State University
    taking online classes while working full time as a building technology specialist for an Elementary School
    in Canby, OR.</p>

    <p>I love anything that has to do with programming and you probably do too!</p>

    <p>Feel free to shoot me an email at <a href="mailto:agneuhold@gmail.com">agneuhold@gmail.com</a>!</p>

    <p>P.S. This page isn't very fancy. I'm just getting started learning how to work these kinds of things 🙂.
      Although clearly I know that emojis can be used in code! 🎉🎉🎉 Hopefully that isn't too off putting.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
