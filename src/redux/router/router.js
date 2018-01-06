import { routerForBrowser } from 'redux-little-router'

/* const basename = process.env.NODE_ENV === 'production' ? '/todomvc' : '' */
const basename = ''

export const { reducer, enhancer, middleware } = routerForBrowser({
  routes: {
    '/': { title: 'HOME',
      '/cities': { title: 'CITIES' },
      '/contacts': { title: 'CONTACTS' },
    },
  },
  basename,
})
