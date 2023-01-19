import { Josefin_Sans } from "@next/font/google";
import Image from "next/image";
import "../../styles/globals.css";

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <head />
      <body>
        <main className="lg:h-screen lg:px-40">
          <div className="container mx-auto p-2 pt-6 pb-32 lg:py-8 lg:flex lg:gap-40 lg:h-full items-center">
            <Image
              alt="logo"
              src="/full-logo.png"
              width={436}
              height={200}
              className="w-[192px] mx-auto mb-8 grow lg:w-1/5 lg:mw-[436px] object-contain"
            />
            <div className="grow">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
