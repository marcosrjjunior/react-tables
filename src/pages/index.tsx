import Link from 'next/link'
import ViewSource from 'components/ViewSource'
import { Card, Container } from 'components/Layout'

import s from '../styles.module.scss'

const Index = () => (
  <Container>
    <ViewSource pathname="pages/index.js" />

    <Card>
      <h1>React Tables</h1>
      <p>
        The goal with this page is to to show you examples of tables using
        reactjs closest to the real-world as possible.
      </p>
      <ul>
        <li>
          <Link href="/simple">
            <a>simple</a>
          </Link>
        </li>

        <li>
          <Link href="/pagination">
            <a>pagination</a>
          </Link>
        </li>

        <li>
          <Link href="/row-selection">
            <a>row selection</a>
          </Link>
        </li>

        <li>
          <Link href="/sorting">
            <a>sorting</a>
          </Link>
        </li>

        <li>
          <Link href="/sticky-column">
            <a>sticky-column</a>
          </Link>
        </li>

        <li>
          <Link href="/static">
            <a>static</a>
          </Link>
        </li>
      </ul>

      <p>
        Please feel free to use any of the examples, I hope that is helpful for
        you.
      </p>

      <hr />
      <h2 id="more">Learn More</h2>
      <p>If you want to know some reasons why I created this examples.</p>
      <p>
        Checkout the <a href="post">React tables post</a>{' '}
      </p>
    </Card>
  </Container>
)

export default Index
