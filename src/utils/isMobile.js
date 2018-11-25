/* eslint-disable */
const isMobileDevice = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

module.exports = { isMobile: isMobileDevice };
