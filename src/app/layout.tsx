import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/public/styles/newcard.css"
import "/public/styles/stay.css"
import "/public/styles/content.css"
import "/public/styles/arrange.css"
import "/public/styles/form.css"
import "/public/styles/round.css"
import "/public/styles/text.css"
import "/public/styles/product.css"
import "/public/styles/form.css"
import "/public/styles/layout.css"
import "/public/styles/aboutus.css"
import "/public/styles/shah.css"
import "/public/styles/collection.css"
import "/public/styles/signup.css"
import "/public/styles/blog.css"
import "/public/styles/tabs.css"

const inter = Inter({ subsets: ["latin"] });

import Card from "./component/card/Card";
import TopBanner from "./component/TopBanner";
import ResponsiveAppBar from "./component/NavR";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Expedition Asia Trek And Tours",
  description: "Expedition Asia Trek and Tours is Gilgit Baltistan based tour operating company. We arrange expeditions to K2, masherbrum, gasherbrum,. Skardu, Gilgit Baltistan. Skardu Gilgit Expedition K2 Trekking Tours GB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
