import * as React from 'react';

import {Layout} from "../components/General/Layout/Layout"
import {Hero} from "../components/Home/Hero/Hero"
import {GettingStarted} from "../components/Home/GettingStarted/GettingStarted"
import {GetInTouch} from "../components/Home/GetInTouch/GetInTouch"
import {WhatIsIt} from "../components/Home/WhatIsIt/WhatIsIt"

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhatIsIt/>
    <GettingStarted/>
    <GetInTouch/>
</Layout>
)

export default IndexPage
