import './globals.css';
import { redHatDisplay } from '/app/ui/fonts';

export const metadata = {
  title: 'Meet-Landing-Page',
  description: 'Meet social landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${redHatDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
