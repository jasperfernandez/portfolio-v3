import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 200,
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = () => {
  Scrollbar.use(OverscrollPlugin);

  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};

export default SmoothScroll;
