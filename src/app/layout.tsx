import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import {
  Box,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import Header from "@/components/Header";
import { ReduxProvider } from "@/redux/Provider/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIPERPUS",
  description: "Application to borrow books",
};

const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    primary: [
      "#557153",
      "#555555",
      "#F7EE23",
      "#FFFFFF",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <MantineProvider theme={theme} defaultColorScheme={"light"}>
            <Header />
            <Box mt={72}>{children}</Box>

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
