import { Nunito } from 'next/font/google';
import { Providers } from '@/shared/components/shared/providers';
import './globals.css';

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" data-react-helmet="true" />
      </head>
      <body className={nunito.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
