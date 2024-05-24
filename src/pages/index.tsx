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
      <p>Examples of tables, mostly without using any dependency.</p>

      <ul>
        <li>
          <Link href="/simple">simple</Link>
        </li>

        <li>
          <Link href="/pagination">pagination</Link>
        </li>

        <li>
          <Link href="/row-selection">row selection</Link>
        </li>

        <li>
          <Link href="/sorting">sorting</Link>
        </li>

        <li>
          <Link href="/sticky-column">sticky-column</Link>
        </li>

        <li>
          <Link href="/static">static</Link>
        </li>

        <li>TODO: url state</li>
      </ul>

      <p>Using dependencies</p>
      <ul>
        <li>
          <Link href="/react-window">react-window</Link>
        </li>
      </ul>

      <p>Feel free to use any of the examples in your project.</p>

      <hr />

      <p>
        If you want to know the reasons why I created this page, check the{' '}
        <a
          target="_blank"
          href="https://marcosrjjunior.com/blog/implementing-tables-using-reactjs"
        >
          React tables post
        </a>
      </p>
    </Card>
  </Container>
)

export default Index
