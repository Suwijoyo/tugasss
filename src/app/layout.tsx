import type { Metadata } from 'next';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: 'SIP Terpadu',
  description: 'Sistem Informasi Terpadu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      
      <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ftugasss1092back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
      <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}
