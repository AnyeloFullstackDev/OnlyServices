import { useAuthStore } from '@/store/auth/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};
