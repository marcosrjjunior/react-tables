import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from 'components/ViewSource'
import vercel from '../../public/vercel.png'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />
    <div className={styles.card}>
      <h1>React Tables</h1>
      <p>The goal with this page is to to show you examples of tables using reactjs closest to the real-world as possible.</p>
      <ul>
        <li>
          <Link href="/simple">
            <a>simple</a>
          </Link>
        </li>
      </ul>

      <p>Please feel free to use any of the examples, I hope that is helpful for you.</p>
      
      <hr className={styles.hr} />
      <h2 id="more">Learn More</h2>
      <p>If you want to know some reasons why I created this examples.</p>
      <p>
        Checkout the{' '}
        <a href="post">
          React tables post
        </a>{' '}
      </p>
    </div>
  </div>
)

export default Index
