import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function RootPage() {
  const cookieStore = await cookies();
  const preferredLang = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  
  redirect(`/${preferredLang}`);
} 