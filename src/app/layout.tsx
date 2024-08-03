import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ランチ君',
  description: 'OpenAIを利用して今日ランチするお店をおすすめします',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
