import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        'pulsar-blue': '#2e5bff',
        'polar-blue': '#8ab4f8'
      }
    }
  }
};
