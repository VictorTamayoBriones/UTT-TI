import { createSlice } from "@reduxjs/toolkit";
import { IuserInfo } from "../../../models";


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
        matricula: '20192ITID045',
        email: 'yessgarciacampos@gmail.com',
        password: 'MyPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
        grado: 9,
        grupo:"A"
    },
    {
        id: 3,
        name: 'Jose Ramon Hernandez Muñoz',
        matricula: '20182ITI005',
        email: 'yessgarciacampos@gmail.com',
        password: 'MyPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
        grado: 9,
        grupo:"A"
    },
    {
        id: 4,
        name: 'Jose Eleazar Carmona Hernandez',
        matricula: '20212ITID065',
        email: 'carherelejos@gmail.com',
        password: 'MyPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
        grado: 9,
        grupo:"A"
    },
    {
        id: 5,
        name: 'Channel Gonzalez Jimenez',
        matricula: '20192ITID017',
        email: 'channelgonzalezjimenez100@gmail.com',
        password: 'MyPass123',
        type: 'student',
        photo: 'https://photo.com',
        gitHub:'https://github.com',
        carrera: 'IDGS',
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