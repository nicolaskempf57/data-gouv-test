import { mount } from '@vue/test-utils'
import DummyHash from './DummyHash.vue'
import i18n from "../i18n";
import fr from "../translations/fr";

describe('DummyHash', () => {
    it('should display loader text', async () => {
        const msg = fr['loading']
        const wrapper = mount(DummyHash, {
            global: {
                plugins: [i18n]
            }
        })

        expect(wrapper.find('p').text()).toEqual(msg)
    })
})