import Header2 from "./Components/Header/Header2";
import Header1 from "./Components/Header/Header1"
import Header3 from "./Components/Header/Header3";
import { CssBaseline, ThemeProvider,Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Scrolltotop from "./Components/Scroll/scrolltotop";



function App() {

  const [theme, colorMode] = useMode();

  return (

    <ColorModeContext.Provider
// @ts-ignore
    value={colorMode}>
      <ThemeProvider
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.
// @ts-ignore
        palette.bg.main} >
          <Hero />
          <Main />
        </Box>

        <Footer />


        <Scrolltotop/>


      </ThemeProvider>

    </ColorModeContext.Provider>


  )
}

export default App
