interface Props {
    size?: "very-small" | "small" | "medium" | "large"
}

export const Logo = ({ size = "medium" }: Props) => {
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
        <svg
            width={sizeLogo}
            viewBox="0 0 192.756 192.756"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path d="M9.921 105.65C4.746 57.393 39.259 14.122 87.008 9.001c47.748-5.121 90.652 29.848 95.828 78.105 5.174 48.256-29.34 91.528-77.088 96.648C58 188.876 15.096 153.907 9.921 105.65zm7.091-1.11C12.253 60.157 43.86 20.374 87.608 15.682c43.748-4.691 83.072 27.485 87.832 71.869 4.76 44.383-26.848 84.167-70.594 88.858-43.75 4.692-83.074-27.485-87.834-71.869z" />
                <path d="M117.633 58.94s-.812-4.474-1.846-5.81c0 0-2.238-2.207-5.91-.145 0 0-1.949 1.544-2.109 2.118 0 0-2.312 4.363-8.066 7.762 0 0-7.839-.495-7.246 4.002 0 0-7.474 2.916-8.318 3.34 0 0 3.154 2.442 3.359 3.311 0 0-2.675-.047-8.095 5.429 0 0 4.406.64 5.577 1.182 0 0 1.535.836.106.99 0 0-4.901.97-7.914 6.076 0 0 4.714.385 5.703.279 0 0-3.569.938-6.02 6.095 0 0 5.573-.931 6.527-1.367 0 0-.812 4.871-3.73 7.743 0 0-3.154-5.558-16.08-4.728 0 0-6.377.684-8.416.346 0 0-5.008-.019-4.741-2.717 0 0-3.589-38.658 21.293-52.45 0 0 8.75-4.497 12.026-1.957 0 0 4.176 3.667 5.664 4.064 0 0-5.645-5.958-6.093-7.022 0 0-2.828-4.591-2.773-9.269 0 0-43.457 3.022-55.686 64.703 0 0 1.241-1.913 2.525-2.383 0 0-6.529 11.712 3.791 37.412 0 0-2.26-19.001 3.096-24.024 0 0-8.147 28.793 22.953 47.037 0 0-10.079-12.045-9.016-21.835 0 0 3.288 8.88 14.273 16.935 0 0-7.111 7.324 1.499 13.965 0 0 28.886 25.601 57.291 1.086l2.682 1.158 4.939-10.985-9.68 5.154.467 2.285s-22.774 14.789-40.508-1.218c0 0 22.561 12.264 39.502-4.013 0 0 10.035-1.855 25.373-23.745 0 0 3.598 4.508-13.555 25.035 0 0 31.529-17.174 27.684-49.909 0 0 4.838 2.595 4.248 23.015 0 0 6.145-22.572 1.627-38.772 0 0 1.061.553 2.635 3.833 0 0-5.924-54.204-50.77-64.745 0 0-.951 6.665-3.16 8.903 0 0-6.391 6.803-7.076 7.656 0 0 5.258-1.788 9.166-4.765 0 0 35.635 7.636 26.887 53.624 0 0-.139 3.909-5.775 5.292 0 0-2.773.074-4.297-.652 0 0-14.127-4.157-28.713 6.083 0 0 2.039 9.681 1.225 12.438 0 0-3.938-11.813-4.453-14.539 0 0-1.914-4.355 1.039-10.012 0 0 3.166-6.791 3.008-10.334 0 0 3.205 1.882 6.17-.55 0 0 9.359-10.236 9.949-10.967l.797 2.251 1.197-.24.232-6.142-6.504-1.528.506 1.614-6.402 3.579 5.275-8.908 2.182.655.07.66.674.039s.326-2.148 3.258-2.797c0 0 3.779-1.072 4.195-1.339 0 0 5.318-1.238 1.641-7.517 0 0-1.559 2.058-1.244 2.913 0-.001-6.092 2.321-8.115 7.322z" />
            </g>
        </svg>
    </div>);
};