import "./globals.css";
export const metadata = {
  title: "Web Dev2 Assignment2",
  description: "assignment2 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <title>Shopping List</title>
      </body>
    </html>
  );
}



