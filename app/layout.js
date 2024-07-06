import './globals.css';
import { Red_Hat_Display } from 'next/font/google';

export const redhatdisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Meet-Landing-Page',
  description: 'Meet social landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${redhatdisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
