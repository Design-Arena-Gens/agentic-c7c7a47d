export const metadata = {
  title: 'Catalytic Selective Oxidation Process (CSOP) - Industrial Process Solutions',
  description: 'Advanced catalytic selective oxidation technology for high-purity chemical intermediate production. Efficient, safe, and reliable process solution for industrial applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
