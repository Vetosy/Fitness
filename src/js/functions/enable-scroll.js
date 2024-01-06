import vars from '../_vars';

export const enableScroll = () => {
  vars.bodyEl.style.cssText = '';
  vars.bodyEl.style.scrollBehavior = '';
};
