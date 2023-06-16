import { withPWA } from 'next-pwa';
import process from 'process';

export default withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
});
