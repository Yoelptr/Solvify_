import React from "react";
import Head from "next/head";
import { env } from "~/env";

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  // ogImageUrl ?: string;
  pathname?: string;
}> = ({ title = "Konten kamu berharga", metaDescription, pathname = "" }) => {
  const defaultTitle = "Solvify";
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000";

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title + " | " + defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />

      <meta property="og:url" content={pageUrl} />
    </Head>
  );
};
