import "./globals.css";

import { SideBar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-row w-[100dvw] h-[100dvh]">
          <SideBar />
          <div className="h-full flex-1 overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  );
}
