import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex justify-center items-center`}>
        <main className="w-[375px] h-[812px] max-h-screen bg-surface-default overflow-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
