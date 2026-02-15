import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thefish.vn"),
  title: {
    default: "The Fish — Dịch Vụ Bưng Quả & Cho Thuê Áo Dài Cưới",
    template: "%s | The Fish",
  },
  description:
    "The Fish cung cấp dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới cao cấp tại TP. Hồ Chí Minh. Nâng niu trọn vẹn ngày trọng đại của bạn.",
  keywords: [
    "bưng quả",
    "cho thuê áo dài",
    "áo dài cưới",
    "dịch vụ cưới",
    "đám hỏi",
    "bê tráp",
    "áo dài bê tráp",
    "thuê áo dài TPHCM",
    "phụ kiện cưới",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "The Fish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
