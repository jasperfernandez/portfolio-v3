import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  Scrollbar.use(OverscrollPlugin);

  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  useEffect(() => {
    const scrollbar = Scrollbar.get(document.body);
    if (scrollbar) {
      scrollbar.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
};

export default SmoothScroll;
