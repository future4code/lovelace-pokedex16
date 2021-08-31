import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage"

const Router = () => {
    return(
<BrowserRouter>
   <Switch>
       <Route exact path={"/"} component={HomePage} />
       <Route exact path={"/pokemon/:name"} component={DetailsPage} />
       <Route exact path={"/pokedex"} component={PokedexPage} />
    
    <Route>
        <div>Erro: Página não encontrada </div>
   </Route>
   </Switch>
</BrowserRouter>
    )
}

export default Router