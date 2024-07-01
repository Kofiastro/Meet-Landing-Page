import {inter} from '@/app/ui/fonts'
import "./globals.css";

export const metadata = {
  title: "Meet-Landing-Page",
  description: "Meet social landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
