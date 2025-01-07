import Link from 'next/link'
import { getDictionary } from '@/lib/get-dictionary'
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Home({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const session = await getSession();
  const dict = await getDictionary(lang as 'en' | 'es')

  if (session) {
    redirect(`/${lang}/dashboard`);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome / Bienvenido</h1>
      <div className="flex flex-col gap-4">
        <a 
          href="/api/auth/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center"
        >
          {lang === 'en' ? 'Login' : 'Iniciar Sesión'}
        </a>
      </div>
    </main>
  )
}

