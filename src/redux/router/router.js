import { routerForBrowser } from 'redux-little-router'

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
