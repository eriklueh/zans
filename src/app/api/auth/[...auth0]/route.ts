import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { cookies } from 'next/headers';

export const GET = handleAuth({
  callback: handleCallback({
    async afterCallback(_req: any, session: any) {
      const cookieStore = await cookies();
      const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';
      session.returnTo = `/${lang}/dashboard`;
      return session;
    }
  })
}); 