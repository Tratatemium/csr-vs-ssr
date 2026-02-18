/**
 * @param {string} selector
 * @returns {HTMLElement | null}
 */
const $ = (selector) => document.querySelector(selector);

/**
 * @param {string} selector
 * @returns {NodeListOf<HTMLElement>}
 */
const $$ = (selector) => document.querySelectorAll(selector);

/**
 * @param {string} tag
 * @param {object} [options]
 * @param {object} [options.attrs]
 * @param {Array<HTMLElement|string>} [options.children]
 * @param {object} [options.props]
 * @returns {HTMLElement}
 */
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