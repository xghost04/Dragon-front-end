import { Seo } from "@/ui/components/seo"
import { Typography } from "@/ui/design-system/typography/typography";
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Seo title="Dragon" description="Description..." />

      <div className="space-y-5">
        <Typography>Dragon</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">Dragon</Typography>
        <Typography theme="secondary" variant="lead" component="div">Dragon</Typography>
        <Typography variant="body-sm" component="div">Dragon</Typography>
        <Typography variant="caption4" component="div">Dragon</Typography>
        <Typography variant="caption4" weight="medium" component="div">Dragon</Typography>
      </div>
    </>
  );
}