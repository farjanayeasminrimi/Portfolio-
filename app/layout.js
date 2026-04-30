import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { SmoothScroll } from "./components/SmoothScroll";

export const metadata = {
  title: "Farjana Yeasmin Rimi | Portfolio",
  description: "Personal portfolio of Farjana Yeasmin Rimi, a Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-primary/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
