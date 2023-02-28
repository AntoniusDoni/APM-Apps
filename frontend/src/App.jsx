import React from "react";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./context/ErrorBoundry";
import SearchNOKartu from './pages/searchNokartu';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pendaftaran from "./pages/pendaftaran";
import HistoryKunjungan from "./pages/historykunjungan";
import HistoryKontrol from "./pages/historykontrol";
import ViewPdf from "./pages/ViewPdf";
function App() {
    return (
        <AppProvider>
            <ErrorBoundary>
                <HashRouter>
                    <Routes>
                        <Route path="" element={<Home/>}>
                            <Route path="/" element={<SearchNOKartu/>}/>
                            <Route path="pendaftaran" element={<Pendaftaran/>}/>
                            <Route path="histrorykunjungan" element={<HistoryKunjungan/>}/>
                            <Route path="histrorykontrol" element={<HistoryKontrol/>}>
                                <Route path=":noka" element={<HistoryKontrol/>}/>
                            </Route>
                            
                            <Route path="/ViewPdf" element={<ViewPdf/>}>
                            <Route path=":doc" element={<ViewPdf/>}/>
                            </Route>
                        </Route>
                        
                    </Routes>
                </HashRouter>
            </ErrorBoundary>
        </AppProvider>
    )
}

export default App
