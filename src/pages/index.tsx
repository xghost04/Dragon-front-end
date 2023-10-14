import { Seo } from "@/ui/components/seo"
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiNotification2Fill, RiShieldUserLine } from "react-icons/ri";
import { RiUser6Fill } from "react-icons/ri"

export default function Home() {
  return (
    <>
      <Seo title="Dragon" description="Description..." />

      <div className="max-w-6xl py-10 mx-auto space-y-5">

        {/*Typography*/}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border-gray-400 divide-gray-400 rounded">
            <Typography theme="primary" variant="body-lg" component="h1">
              Dragon
            </Typography>
            <Typography theme="secondary" variant="lead" component="div">
              Dragon
            </Typography>
            <Typography variant="body-sm" component="div">
              Dragon
            </Typography>
            <Typography variant="caption4" component="div">
              Dragon
            </Typography>
            <Typography variant="caption4" weight="medium" component="div">
              Dragon
            </Typography>
          </div>
        </div>

        {/* Spinners */}
        <Typography variant="caption2" weight="medium">
          Spinners
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Spinner size="small" />
          <Spinner />
          <Spinner size="large" />
        </div>

        {/* Buttons */}
        <Typography variant="caption2" weight="medium">
          Buttons
        </Typography>
        <Typography variant="caption3" weight="medium">
            Small
          </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button isLoading size="small">
            Accent
          </Button>
          <Button isLoading size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
            Accent
          </Button>
          <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
            Accent
          </Button>
          <Button isLoading size="small" variant="secondary">
            Secondary
          </Button>
          <Button isLoading size="small" variant="outline">
            Accent
          </Button>
          <Button isLoading size="small" variant="disabled" disabled>
            Accent
          </Button>
          <Button isLoading size="small" variant="ico"
            icon={{ icon: RiUser6Fill }} />
        </div>
        <Typography variant="caption3" weight="medium">
            Medium
          </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button>Accent</Button>
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="outline">
            Accent
          </Button>
          <Button variant="disabled" disabled>
            Accent
          </Button>
          <Button variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>
        
        <Typography variant="caption3" weight="medium">
            Large
          </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button size="large">
            Accent
          </Button>
          <Button size="large" variant="secondary">
            Secondary
          </Button>
          <Button size="large" variant="outline">
            Accent
          </Button>
          <Button size="large" variant="disabled" disabled>
            Accent
          </Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
          />

        </div>
      </div>
    </>
  );
}