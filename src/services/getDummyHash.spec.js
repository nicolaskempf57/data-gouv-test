import mockAxios from "axios";
import getDummyHash from "./getDummyHash";

describe('getDummyHash', () => {
    it("fetches data from api", async () => {
        // setup
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    random_hash:"f9a70b031e886fa074c95ce25d8c24155c92bc2cbea00c40bb2e1463814bf315",
                    random_string:"zuqzthezcvpfkbjwdtsj"
                }
            })
        );

        // work
        const hash = await getDummyHash();

        // expect
        expect(hash).toHaveProperty('random_hash');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith( "dummy-hash");
    });
})