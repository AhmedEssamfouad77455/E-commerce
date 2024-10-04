import Header2 from "./components/header/Header2"
import Header1 from "./components/header/Header1"
import Header3 from "./components/header/Header3"
import Hero from "./components/Hero/Hero"
import Footer from "./components/footer/Footer"
import TopScroll from "./components/scroll/TopScroll"



function App({toggleTheme}) {

  return (
    <>
    <Header1 toggleTheme={toggleTheme}/>
    <Header2/>
    <Header3/>
    <Hero/>
    <Footer/>
    <TopScroll/>


    </>
  )
}

export default App
