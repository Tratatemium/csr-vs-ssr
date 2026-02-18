const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

function create (tag, options = {}) {
    const { attrs = {}, children = [], ...props } = options;

    const el = document.createElement(tag);

    Object.assign(el, props);
    Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    children.forEach(child => el.append(child));

    return el;
}

export { $, $$, create };