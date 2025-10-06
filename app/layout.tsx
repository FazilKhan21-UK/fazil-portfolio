export const metadata = {
  title: "Fazil Khan – Supply Chain & Engineering Portfolio",
  description:
    "Supply chain & procurement professional | Open to UK roles with visa sponsorship.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
