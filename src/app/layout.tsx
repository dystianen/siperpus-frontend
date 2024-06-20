// styles
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, ColorSchemeScript, Image, MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import { ReduxProvider } from "@/redux/Provider/ReduxProvider";
import { ToastContainer } from "react-toastify";
import Theme from "@/config/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIPERPUS",
  description: "Application to borrow books",
};

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
          <MantineProvider theme={Theme} defaultColorScheme={"dark"}>
            <Header />
            <Box mt={100}>
              <Image
                src={"/assets/imgs/bg-particle.svg"}
                alt="bg-particle"
                pos={"fixed"}
                h={"100vh"}
                style={{ zIndex: 0 }}
              />
              <Box pos={"relative"} style={{ zIndex: 1 }}>
                {children}
              </Box>
            </Box>

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
