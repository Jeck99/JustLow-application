// const PORT = process.env.PORT || 8080;
const API =process.env.NODE_ENV === 'production'? `https://lawersmern.herokuapp.com`:'http://localhost:8080';
/**
 * async function that updating the lawers state
 * and returns the lawers
 * * @returns {data:lawers array,success:bool}
 */
export async function getAllLawers() {
    try {
        return await fetch(`${API}/lawers/all`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }

}
/**
 * async function that updating the lawers state
 * and returns the lawers by name
 * * @returns {data:lawers array,success:bool}
 */
 export async function getLawerByName(lawerName) {
    try {
        return await fetch(`${API}/lawers/lawer/searchByName/${lawerName}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that updating the lawers state
 * and returns the lawers by move id
 * * @returns {data:lawers array,success:bool}
 */
 export async function getLawerById(_id) {
    try {
        return await fetch(`${API}/lawers/lawer/${_id}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new lawer
 * and returns the lawer 
 * * @returns {data:lawers array,success:bool}
 */
export async function saveLawerToDb(lawerToSave) {
    const options = {
        method: "POST",
        body:JSON.stringify({ lawer: lawerToSave }),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/lawers/saveLawer`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new lawer
 * and returns the lawer 
 * * @returns {data:lawers array,success:bool}
 */
 export async function removeLawer(lawerId) {
    const options = {
        method: "DELETE",
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/lawers/lawer/${lawerId}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that update a lawer
 * and returns the lawer 
 * * @returns {data:lawers array,success:bool}
 */
 export async function putLawer(lawer) {
    const options = {
        method: "PUT",
        body:JSON.stringify({ lawer }),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/lawers/updateLawer/${lawer._id}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}