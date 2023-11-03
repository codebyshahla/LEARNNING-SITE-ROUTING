import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainHeader from './Components/Header/MainHeader.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<MainHeader/>
</BrowserRouter>
)
