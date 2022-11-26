import { useState } from "react";
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route}  from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sales from './scenes/sales';
import Commission from './scenes/commission';
import Sidebar from './scenes/global/Sidebar';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Sales/>}/>
            <Route path="/commission" element={<Commission/>}/>
          </Routes>
        </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
