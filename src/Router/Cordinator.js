export const goToHomePage = (history) => {
    history.push ("/")
}
export const goToDetailsPage = (history,name) => {
    history.push (`/pokemon/${name}`)
}
export const goToPokedexPage = (history) => {
    history.push ("/pokedex")
}