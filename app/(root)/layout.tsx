import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared';

export const metadata: Metadata = {
  title: 'Cute Pizzas',
  description: 'Cute Pizzas for you!',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
