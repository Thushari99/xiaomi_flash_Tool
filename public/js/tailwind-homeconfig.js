tailwind.config = {
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        darkGray: '#333333',
        orange: '#FF6A00',
        lightGray: '#F7F7F7',
        red: '#FF0000',
        lightOrange: '#FF8533',
        darkOrange: '#E56000',
        mediumGray: '#666666',
        veryLightGray: '#F0F0F0',
        successGreen: '#22C55E',
        warningYellow: '#F59E0B',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      screens: {
        'iphone-se': '375px',
        'iphone-xr': '414px',
        'iphone-12': '390px',
        'iphone-14': '428px',
        'pixel-7': '412px',
        'galaxy-s8': '360px',
        'galaxy-s20': '384px',
        'ipad-mini': '768px',
        'ipad-air': '820px',
        'ipad-pro': '1024px',
        'surface-pro': '912px',
        'surface-duo': '540px',
        'galaxy-fold': '280px',
        'zenbook-fold': '800px',
        'galaxy-a51': '412px',
        'nest-hub': '1024px',
        'nest-hub-max': '1280px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
      maxWidth: {
        'screen-xl': '1440px',
      },
    }
  }
}
