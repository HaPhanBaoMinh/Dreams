import type { Metadata } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dreams.vn"),
  title: {
    default: "Dreams — Dịch Vụ Bưng Quả & Cho Thuê Áo Dài Cưới",
    template: "%s | Dreams",
  },
  description:
    "Dreams cung cấp dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới cao cấp tại TP. Hồ Chí Minh. Nâng niu trọn vẹn ngày trọng đại của bạn.",
  keywords: [
    "bưng quả",
    "cho thuê áo dài",
    "áo dài cưới",
    "dịch vụ cưới",
    "đám hỏi",
    "bê tráp",
    "áo dài bê tráp",
    "thuê áo dài TPHCM",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Dreams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${beVietnam.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
