import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'
import Produtos from './Produto'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/produto/:id" Component={Produtos} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
