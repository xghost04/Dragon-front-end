import Logo from "@/ui/design-system/logo/logo.svg"

interface Props {
    size?: "very-small" | "small" | "medium" | "large"
}

export const Loga = ({ size = "medium" }: Props) => {
    let sizeLogo: number;

    switch (size) {
        case "very-small":
            sizeLogo = 34;
            break;
        case "small":
            sizeLogo = 61;
            break;
        case "medium": //Default
            sizeLogo = 88;
            break;
        case "large":
            sizeLogo = 140;
            break;
    }
    return (<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  {/*<!-- Corps du dragon -->*/}
  <circle cx="100" cy="100" r="80" fill="blue" />

  {/*<!-- Tête du dragon -->*/}
  <ellipse cx="100" cy="70" rx="50" ry="35" fill="blue" />

  
  <circle cx="85" cy="60" r="5" fill="white" />
  <circle cx="85" cy="60" r="2" fill="black" />

 
  <path d="M80 75 Q90 80 100 75" fill="none" stroke="black" />

 
  <path d="M50 60 Q70 30 100 60" fill="blue" />
  <path d="M150 60 Q130 30 100 60" fill="blue" />

 
  <path d="M30 100 C20 120 30 140 60 130" fill="blue" />
</svg>

    </div>);
};

export { Logo };
