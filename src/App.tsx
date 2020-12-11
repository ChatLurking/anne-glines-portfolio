import * as React from "react"
import { Header } from "core/header"
import { About } from "core/about"
import { AppGrid } from "utils/styled"
import { Projects } from "core/project"
import { Footer } from "core/footer"

function App() {
  return (
    <AppGrid>
      <Header />
      <About />
      <Projects />
      <Footer />
    </AppGrid>
  )
}

export default App
