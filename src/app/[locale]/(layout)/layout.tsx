import { getMessages } from "next-intl/server";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./sidebar/page";
import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function Layout({ children, params: { locale } }: Props) {
  const messages = await getMessages();
  return (
    <html className="w-full" lang={locale}>
      <body>
        <main className="flex flex-col justify-between">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Sidebar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
