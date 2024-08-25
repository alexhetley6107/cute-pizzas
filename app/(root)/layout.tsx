import type { Metadata } from 'next';
import { Header } from '@/components/shared/header';

export const metadata: Metadata = {
  title: 'Cute Pizzas',
  description: 'Cute Pizzas for you!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
