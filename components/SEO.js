import Head from "next/head";

export default function SEO({
  title = "NanoTech Solutions – Premium IT Hardware in Bangladesh",
  description = "NanoTech Solutions supplies servers, switches, LAN cards, SFPs, RAM, and power supplies in Bangladesh. Contact us for pricing and availability.",
  image = "/nt_logo2_transparent_dark.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_BD" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
