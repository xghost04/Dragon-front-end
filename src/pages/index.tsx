import { Seo } from "@/ui/components/seo"
import { Typography } from "@/ui/design-system/typography/typography";
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Seo title="Dragon" description="Description..."/>
      <Typography variant="h1" component="h1">Dragon</Typography>
    </>
  );
}
