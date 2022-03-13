import * as cookie from 'cookie'
import MongoStore from 'connect-mongo'
import express from 'express'
import session from 'express-session';

import { MemoryStore } from 'express-session';





const app = express()



const db = app.use(session({
    resave: false,
    saveUninitialized: true,
    name: 'sid',
    secret: 'some secret',
    store: MongoStore.create({ 
    mongoUrl: 'mongodb+srv://ryuk:jz1234@sessions.mnty4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' }),
    cookie: {
        maxage: 99 * 99,
        samesite: false,
        secure: false,
        httpOnly: true
    }
}))
/*
export async function getContext({headers}) {
    const cookies = cookie.parse(headers.cookie || '')

    if(!cookies.sessionID) {
        return {
            authenticated: false,
        }
    }

    const userSession = JSON.parse(await db.get(cookies.sessionID))

    if(!userSession) {
        return {
            authenticated: true,
            email: userSession.email,
            password: userSession.password
        }
    } else {
        return {
            authenticated: false,
        }
    }
}

export function getSession({context}) {
    if(!context.authenticated) {
        return {
            authenticated: context.authenticated,
        }
    }
    return {
        authenticated: context.authenticated,
        email: context.email,
        password: context.password
    }
}
*/