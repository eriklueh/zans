import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function LangLayout({
                                       children,
                                       params: { lang },
                                   }: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }]
}

