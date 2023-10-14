import { Seo } from "@/ui/components/seo/seo"
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiNotification2Fill, RiShieldUserLine } from "react-icons/ri";
import { RiUser6Fill } from "react-icons/ri"
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigations";

export default function Home() {
  return (
    <>
      <Seo title="Dragon" description="Description..." />

      <Navigation />
      
    </>
  );
};