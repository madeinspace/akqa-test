/**
 * because we have to import images dynamically from a local dir and we can't use
 * dynamic require we have to import them all in one batch with require.context, which also
 * maintain the minification we need when building for production.
 * https://webpack.js.org/guides/dependency-management/
 */
const context = require.context('../../../assets/img', false, /\.(png|jpe?g|svg)$/);
const images = {};
context.keys().map((item) => {
    const key = item.replace('./', '');
    const val = context(item);
    images[key] = val;
    return null;
});

export default images;
