import { Roboto } from "next/font/google";
import "./globals.css"


const inter = Roboto({ weight: ['100', '300', '400', '500', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Joao Bonchristiano",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{}}>{children}</body>
    </html>
  );
}
