import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key'; // Usar variables de entorno en producción

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier: email, password }),
    });

    const responseData = await response.json(); // Captura la respuesta como JSON
    console.log("response", responseData);

    if (!response.ok) {
      console.error('Error en la autenticación:', responseData);
      throw new Error(responseData || 'Error en la autenticación');
    }

    if (responseData.jwt) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

      // Almacenar el token en una cookie segura
      const cookieStore = await cookies(); // No es necesario el 'await' aquí
      cookieStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });

      return NextResponse.json({ 
        success: true, 
        jwt: token, 
        user: { 
          email, 
          username: responseData.user.username 
        } 
      });
    }

    return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}