import mockAxios from "axios"
import postLogin from './login'

describe('login', () => {
    it("posts data to api", async () => {
        // setup
        mockAxios.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk1MzI3NDMsImlhdCI6MTYyOTUzMjQ0Mywic3ViIjoyfQ.-cx6ttlhnyk60qcYqov6GGeHrZ2_RLrbelDhu-N4o18"}
            })
        );
        const username = "Nicolas"
        const password = 'password'

        // work
        const response = await postLogin(username, password);

        // expect
        expect(response).toHaveProperty('token');
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith( "login", {username, password})
    });
})