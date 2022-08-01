import { types } from "../types/types"; //** Los importamos para poderlos usar */

export const authReducer = (state = {}, action) => { //** exportamos authReducer, recibe un state como objeto vacio, y recibe una action y regresa */
    switch (action.type) { //** switch recibe los tipos de acciones */
        case types.login: //** Estos son los casos */
            return { //** Lo que vamos a retornar */
                ...action.payload, //** Operador expred para recibir el arreglo como esta */
                logged: true //** Este es el cambio que hace */
            }

        case types.logout:
            return {
                logged: false //** Cambio el estado a false */
            }
            
        default:
            return state; //** Cualquier otro caso manda el state como esta */
    }
}