import mockAxios from "axios"
import getProfile from './getProfile'

describe('getProfile', () => {
    it("fetches data from api", async () => {
        // setup
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {user: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk1MzI3NDMsImlhdCI6MTYyOTUzMjQ0Mywic3ViIjoyfQ.-cx6ttlhnyk60qcYqov6GGeHrZ2_RLrbelDhu-N4o18"}
            })
        );

        // work
        const response = await getProfile();

        // expect
        expect(response).toHaveProperty('user');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith( "me")
    });
})