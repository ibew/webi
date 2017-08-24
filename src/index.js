import Input from './components/input'
import Select from './components/select'

const components = {
    Input,
    Select
}

const install = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(components, {install});