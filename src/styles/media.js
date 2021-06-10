const media = {
  sm: (styles) => `
      @media (min-width: 576px) {
          ${styles}
      }
  `,
  md: (styles) => `
      @media (min-width: 768px) {
          ${styles}
      }
  `,
  lg: (styles) => `
      @media (min-width: 992px) {
          ${styles}
      }
  `,
  xl: (styles) => `
      @media (min-width: 1200px) {
          ${styles}
      }
  `,
};

export default media;
