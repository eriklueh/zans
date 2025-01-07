import Link from 'next/link'
import { getDictionary } from '@/lib/get-dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'es')
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome / Bienvenido</h1>
      <Link 
        href={`/${lang}/dashboard`}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {lang === 'en' ? 'Go to Dashboard' : 'Ir al Dashboard'}
      </Link>
    </main>
  )
}

