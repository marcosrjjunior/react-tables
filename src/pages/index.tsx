import Link from 'next/link'
import ViewSource from 'components/ViewSource'
import { Card, Container } from 'components/Layout'
import Meta from 'components/Meta'

import s from '../styles.module.scss'

const Index = () => (
  <Container>
    <Meta url="/" />

    <ViewSource pathname="src/pages/index.tsx" />

    <Card>
      <h1>React Tables</h1>
      <p>
        The goal of this page is to show you examples of tables using reactjs
        closest to the real world scenario as possible.
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

        <li>
          <Link href="/react-window">
            <a>react-window</a>
          </Link>
        </li>
      </ul>

      <p>
        Feel free to use any of the examples, I hope that is helpful for you.
      </p>

      <hr />

      <h2 id="more">Learn More</h2>
      <p>
        If you want to know the reasons why I created this page, check the{' '}
        <a href="https://marcosrjjunior.com/blog/how-to-implement-tables-using-reactjs">
          React tables post
        </a>
      </p>
    </Card>
  </Container>
)

export default Index
