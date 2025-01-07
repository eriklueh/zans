import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Obtener el token de autenticación de las cookies
  const authToken = request.cookies.get('auth-token')?.value;
  
  // Obtener el idioma preferido (podrías implementar tu propia lógica aquí)
  const preferredLang = request.cookies.get('NEXT_LOCALE')?.value || 'en';
  
  // Si está en la raíz
  if (path === '/') {
    // Si el usuario está autenticado, redirigir al dashboard
    if (authToken) {
      return NextResponse.redirect(new URL(`/${preferredLang}/dashboard`, request.url));
    }
    // Si no está autenticado, redirigir a la página principal con el idioma
    return NextResponse.redirect(new URL(`/${preferredLang}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};

