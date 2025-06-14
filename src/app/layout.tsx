import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'My Custom Badge',
  description:
    'My Custom Badge lets you easily generate personalized badges using the Shields.io API. Customize your style, color, icon, and more — perfect for README files, documentation, or showcasing your tools..',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="relative min-h-screen">
          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-background animate-in fade-in duration-1000 delay-1000 fill-mode-both">
            <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>

          {/* Content */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

