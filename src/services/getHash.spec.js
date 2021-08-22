import mockAxios from "axios";
import getHash from "./getHash";

describe('getHash', () => {
    it("fetches data from api", async () => {
        // setup
        mockAxios.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: {hash: "217ffe0004309406a7d87b5a5cd9e06b"}
            })
        );
        const string = "028213"
        const algorithm = 'md5'

        // work
        const hash = await getHash(string, algorithm);

        // expect
        expect(hash).toHaveProperty('hash');
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith("hash", {algorithm, string});
    });
})