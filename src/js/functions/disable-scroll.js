import vars from '../_vars';

export const disableScroll = () => {
  const paddingOffset = vars.htmlEl.clientWidth - vars.bodyEl.offsetWidth;
  vars.bodyEl.style.cssText = `
    overflow: hidden;
    padding-right: ${paddingOffset}px;
  `;
  vars.bodyEl.style.scrollBehavior = 'unset';
};
