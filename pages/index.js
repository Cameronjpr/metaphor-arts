import Head from 'next/head'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import styles from '../styles/Home.module.sass'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_CONTACT_EMAIL)
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Gallery />
      <footer></footer>
    </div>
  )
}
