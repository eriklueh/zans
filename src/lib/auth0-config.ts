export const auth0Config = {
  auth: {
    params: {
      returnTo: '/dashboard'
    }
  },
  callbacks: {
    onRedirectCallback: async (req: any, token: any): Promise<string> => {
      const lang = req.cookies.get('NEXT_LOCALE')?.value || 'es';
      return `/${lang}/dashboard`;
    }
  },
  routes: {
    callback: '/api/auth/callback',
    login: '/api/auth/login',
    logout: '/api/auth/logout'
  }
}; 