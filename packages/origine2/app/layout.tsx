import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebGAL Terre',
  description: 'WebGAL Terre',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <link rel="icon" type="image/svg+xml" href="../src/favicon.ico" />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}