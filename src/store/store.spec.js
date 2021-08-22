import {mutations, getters} from "./store";
import {decodeToken} from "../services/auth";
const { setToken } = mutations
const { token, isAuthenticated, isTokenExpired} = getters

jest.mock('../services/auth');

describe('mutations', () => {
    it('setToken', () => {
        // mock state
        const state = { token: null }
        const token = 'token'
        // apply mutation
        setToken(state, token)
        // assert result
        expect(state.token).toBe(token)
    })
})

describe('getters', () => {
    it('token', () => {
        // mock state
        const state = { token: 'token' }
        // apply mutation
        const result = token(state)
        // assert result
        expect(result).toBe(state.token)
    })
    it('isAuthenticated', () => {
        // mock state
        const token = null
        const isTokenExpired = false
        // apply mutation
        const result = isAuthenticated({}, {token, isTokenExpired})
        // assert result
        expect(result).toBeFalsy()
    })

    it('isAuthenticated', () => {
        // mock state
        const token = 'some'
        const isTokenExpired = false

        // apply mutation
        const result = isAuthenticated({}, {token, isTokenExpired})
        // assert result
        expect(result).toBe(true)
    })

    it('isTokenExpired', () => {
        // mock state
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk2MTkyNTMsImlhdCI6MTYyOTYxODk1Mywic3ViIjozfQ.aw4fVt2NUcMLMWcT1bORVbsNcNXTYh7mT_VTk1j3JtM'
        const exp = Date.now() / 1000 - 3600
        const decodedToken = {
            exp,
            "iat": 1629618953,
            "sub": 3
        }

        decodeToken.mockClear()
        decodeToken.mockReturnValue(decodedToken)

        // apply mutation
        const result = isTokenExpired({}, {token})
        // assert result
        expect(decodeToken).toBeCalledWith(token)
        expect(decodeToken).toBeCalledTimes(1)
        expect(result).toBe(true)
    })
})

it('isTokenExpired', () => {
    // mock state
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk2MTkyNTMsImlhdCI6MTYyOTYxODk1Mywic3ViIjozfQ.aw4fVt2NUcMLMWcT1bORVbsNcNXTYh7mT_VTk1j3JtM'
    const exp = Date.now() / 1000 + 3600
    const decodedToken = {
        exp,
        "iat": 1629618953,
        "sub": 3
    }

    decodeToken.mockClear()
    decodeToken.mockReturnValue(decodedToken)

    // apply mutation
    const result = isTokenExpired({}, {token})
    // assert result
    expect(decodeToken).toBeCalledWith(token)
    expect(decodeToken).toBeCalledTimes(1)
    expect(result).toBe(false)
})