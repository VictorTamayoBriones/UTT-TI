import { createSlice } from "@reduxjs/toolkit";
import { IuserInfo } from "../../models/userInfo.model";

const INITIAL_STATE:IuserInfo[] = [
    {
        id: 1,
        name: 'Víctor Manuel Tamayo Briones',
        matricula: '20192ITID054',
        email: 'victortamayo509@gmail.com',
        password: 'RubikTamayo123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
        grado: 9,
        grupo:"A"
    },
    {
        id: 2,
        name: 'Yessyca Garcia Campos',
        matricula: '20192ITID054',
        email: 'yess@gmail.com',
        password: 'myPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
        grado: 9,
        grupo:"A"
    },
    {
        id: 3,
        name: 'David saldaña Ortiz',
        matricula: '20192ITID054',
        email: 'david509@gmail.com',
        password: 'myPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IRIC',
        grado: 9,
        grupo:"A"
    },
    {
        id: 4,
        name: 'Julio Cesar Lopez Briones',
        matricula: '20192ITID054',
        email: 'julio@gmail.com',
        password: 'myPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IRIC',
        grado: 9,
        grupo:"A"
    },
]

export const usersSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        
    }
})

export default usersSlice.reducer;