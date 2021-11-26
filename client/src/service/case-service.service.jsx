// const PORT = process.env.PORT || 8080;
const API = process.env.NODE_ENV === 'production' ? `https://casesmern.herokuapp.com` : 'http://localhost:8080';
/**
 * async function that updating the cases state
 * and returns the cases
 * * @returns {data:cases array,success:bool}
 */
export async function getAllCases() {
    try {
        return await fetch(`${API}/cases/all`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }

}
/**
 * async function that updating the cases state
 * and returns the cases by name
 * * @returns {data:cases array,success:bool}
 */
export async function getCaseByName(caseObjName) {
    try {
        return await fetch(`${API}/cases/caseObj/searchByName/${caseObjName}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}

/**
 * async function that updating the cases state
 * and returns the cases by move id
 * * @returns {data:cases array,success:bool}
 */
export async function getCaseById(_id) {
    try {
        return await fetch(`${API}/cases/caseObj/${_id}`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new caseObj
 * and returns the caseObj 
 * * @returns {data:cases array,success:bool}
 */
export async function saveCaseToDb(caseObjToSave) {
    console.log(caseObjToSave);
    const options = {
        method: "POST",
        body:JSON.stringify({ caseObj: caseObjToSave }),
        headers:{'Content-Type': 'application/json'}
    };
    
    try {
        return await fetch(`${API}/cases/saveCase`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new caseObj
 * and returns the caseObj 
 * * @returns {data:cases array,success:bool}
 */
export async function removeCase(caseObjId) {
    const options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${API}/cases/${caseObjId}`, options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that update a caseObj
 * and returns the caseObj 
 * * @returns {data:cases array,success:bool}
 */
export async function putCase(caseObj) {
    const options = {
        method: "PUT",
        body: JSON.stringify({ caseObj }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${API}/cases/${caseObj._id}`, options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}