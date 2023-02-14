import logements from "./logement.json"

class data {
    getLogement() {
        return logements
    }
    getLogementById(id) {
        return logements.filter((logement) => logement.id === id)[0]
    }
}

export default data