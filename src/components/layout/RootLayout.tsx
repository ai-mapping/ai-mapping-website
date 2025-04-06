import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';

const isProdMode = process.env.NODE_ENV === 'production';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {isProdMode ? (
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              /* Add Google Analytics or other analytics code here */
              console.log('Analytics loaded in production mode');
            `,
          }}
        />
      ) : null}
      <body>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}