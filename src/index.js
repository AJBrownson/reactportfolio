import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import App from './App';
import HomeView from './Components/Pages/HomeView';
import Articles from './Components/Pages/Articles';
import Projects from './Components/Pages/Projects';
import Workspace from './Components/Pages/Workspace';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import NotFound from './Components/Pages/NotFound';
import { Footer } from './Components';



const rootElement = document.getElementById('root');
render (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <App /> }>
        <Route index element={ <HomeView /> } />
        <Route path='/articles'  element={ <Articles /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/workspace' element={ <Workspace /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='*' element={ <NotFound /> } />
        </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>,
    rootElement
);
