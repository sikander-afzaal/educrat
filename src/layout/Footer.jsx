const Footer = () => {
  return (
    <>
      <div className="wrapper py-7 md:py-[50px] sm:mt-[30px]">
        <div className="contain lg:flex-row flex-col justify-between items-center text-center lg:text-left lg:items-start gap-5">
          <div className="flex justify-start items-center lg:items-start flex-col gap-5">
            <img
              src="/foot-logo.png"
              className="object-contain w-[140px]"
              alt=""
            />
            <a
              className="font-medium text-[17px] text-nightBlue capitalize"
              href="tel:800 388 80 90"
            >
              Call us <br /> 800 388 80 90
            </a>
            <p className="max-w-[235px] text-dusk text-[15px] leading-[1.4]">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
              hi@educrat.com
            </p>
            <div className="flex justify-start items-center gap-2">
              <a
                href="#"
                target={"blank"}
                className="rounded-full group grid place-items-center bg-transparent transition-all duration-200 hover:bg-[#F7F8FB] w-10 aspect-square"
              >
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-dusk group-hover:fill-purple transition-all duration-200"
                    d="M7.62891 8.31543L8.01172 5.7998H5.57812V4.15918C5.57812 3.44824 5.90625 2.79199 7 2.79199H8.12109V0.631836C8.12109 0.631836 7.10938 0.44043 6.15234 0.44043C4.15625 0.44043 2.84375 1.6709 2.84375 3.8584V5.7998H0.601562V8.31543H2.84375V14.4404H5.57812V8.31543H7.62891Z"
                  />
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="rounded-full group grid place-items-center bg-transparent transition-all duration-200 hover:bg-[#F7F8FB] w-10 aspect-square"
              >
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5508 3.59668C13.0977 3.18652 13.5898 2.69434 13.9727 2.12012C13.4805 2.33887 12.9062 2.50293 12.332 2.55762C12.9336 2.20215 13.3711 1.65527 13.5898 0.97168C13.043 1.2998 12.4141 1.5459 11.7852 1.68262C11.2383 1.1084 10.5 0.780273 9.67969 0.780273C8.09375 0.780273 6.80859 2.06543 6.80859 3.65137C6.80859 3.87012 6.83594 4.08887 6.89062 4.30762C4.51172 4.1709 2.37891 3.02246 0.957031 1.2998C0.710938 1.70996 0.574219 2.20215 0.574219 2.74902C0.574219 3.7334 1.06641 4.6084 1.85938 5.12793C1.39453 5.10059 0.929688 4.99121 0.546875 4.77246V4.7998C0.546875 6.19434 1.53125 7.34277 2.84375 7.61621C2.625 7.6709 2.35156 7.72559 2.10547 7.72559C1.91406 7.72559 1.75 7.69824 1.55859 7.6709C1.91406 8.81934 2.98047 9.63965 4.23828 9.66699C3.25391 10.4326 2.02344 10.8975 0.683594 10.8975C0.4375 10.8975 0.21875 10.8701 0 10.8428C1.25781 11.6631 2.76172 12.1279 4.40234 12.1279C9.67969 12.1279 12.5508 7.78027 12.5508 3.97949C12.5508 3.84277 12.5508 3.7334 12.5508 3.59668Z"
                    className="fill-dusk group-hover:fill-purple transition-all duration-200"
                  />
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="rounded-full group grid place-items-center bg-transparent transition-all duration-200 hover:bg-[#F7F8FB] w-10 aspect-square"
              >
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 3.2959C5.375 3.2959 3.98047 4.71777 3.98047 6.44043C3.98047 8.19043 5.375 9.58496 7.125 9.58496C8.84766 9.58496 10.2695 8.19043 10.2695 6.44043C10.2695 4.71777 8.84766 3.2959 7.125 3.2959ZM7.125 8.49121C6.00391 8.49121 5.07422 7.58887 5.07422 6.44043C5.07422 5.31934 5.97656 4.41699 7.125 4.41699C8.24609 4.41699 9.14844 5.31934 9.14844 6.44043C9.14844 7.58887 8.24609 8.49121 7.125 8.49121ZM11.1172 3.18652C11.1172 2.77637 10.7891 2.44824 10.3789 2.44824C9.96875 2.44824 9.64062 2.77637 9.64062 3.18652C9.64062 3.59668 9.96875 3.9248 10.3789 3.9248C10.7891 3.9248 11.1172 3.59668 11.1172 3.18652ZM13.1953 3.9248C13.1406 2.94043 12.9219 2.06543 12.2109 1.35449C11.5 0.643555 10.625 0.424805 9.64062 0.370117C8.62891 0.31543 5.59375 0.31543 4.58203 0.370117C3.59766 0.424805 2.75 0.643555 2.01172 1.35449C1.30078 2.06543 1.08203 2.94043 1.02734 3.9248C0.972656 4.93652 0.972656 7.97168 1.02734 8.9834C1.08203 9.96777 1.30078 10.8154 2.01172 11.5537C2.75 12.2646 3.59766 12.4834 4.58203 12.5381C5.59375 12.5928 8.62891 12.5928 9.64062 12.5381C10.625 12.4834 11.5 12.2646 12.2109 11.5537C12.9219 10.8154 13.1406 9.96777 13.1953 8.9834C13.25 7.97168 13.25 4.93652 13.1953 3.9248ZM11.8828 10.0498C11.6914 10.5967 11.2539 11.0068 10.7344 11.2256C9.91406 11.5537 8 11.4717 7.125 11.4717C6.22266 11.4717 4.30859 11.5537 3.51562 11.2256C2.96875 11.0068 2.55859 10.5967 2.33984 10.0498C2.01172 9.25684 2.09375 7.34277 2.09375 6.44043C2.09375 5.56543 2.01172 3.65137 2.33984 2.83105C2.55859 2.31152 2.96875 1.90137 3.51562 1.68262C4.30859 1.35449 6.22266 1.43652 7.125 1.43652C8 1.43652 9.91406 1.35449 10.7344 1.68262C11.2539 1.87402 11.6641 2.31152 11.8828 2.83105C12.2109 3.65137 12.1289 5.56543 12.1289 6.44043C12.1289 7.34277 12.2109 9.25684 11.8828 10.0498Z"
                      className="fill-dusk group-hover:fill-purple transition-all duration-200"
                    />
                  </svg>
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="rounded-full group grid place-items-center bg-transparent transition-all duration-200 hover:bg-[#F7F8FB] w-10 aspect-square"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.73438 12.6904V4.51465H0.191406V12.6904H2.73438ZM1.44922 3.4209C2.26953 3.4209 2.92578 2.7373 2.92578 1.91699C2.92578 1.12402 2.26953 0.467773 1.44922 0.467773C0.65625 0.467773 0 1.12402 0 1.91699C0 2.7373 0.65625 3.4209 1.44922 3.4209ZM12.2227 12.6904H12.25V8.20605C12.25 6.01855 11.7578 4.32324 9.1875 4.32324C7.95703 4.32324 7.13672 5.00684 6.78125 5.63574H6.75391V4.51465H4.32031V12.6904H6.86328V8.64355C6.86328 7.57715 7.05469 6.56543 8.36719 6.56543C9.67969 6.56543 9.70703 7.76855 9.70703 8.72559V12.6904H12.2227Z"
                    className="fill-dusk group-hover:fill-purple transition-all duration-200"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center lg:items-start mt-4 lg:mt-0 flex-col gap-4">
            <h4 className="uppercase text-nightBlue font-medium mb-2 text-[17px]">
              About
            </h4>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              About us
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              learner stories
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              careers
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              press
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              leadership
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              contact us
            </a>
          </div>
          <div className="flex justify-start items-center lg:items-start flex-col gap-4">
            <h4 className="uppercase text-nightBlue font-medium mb-2 text-[17px]">
              CATEGORIES
            </h4>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Development
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Business
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] underline text-dusk font-normal capitalize"
            >
              Finance & Accounting
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              IT & Software
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Office Productivity
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Design
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Marketing
            </a>
          </div>
          <div className="flex justify-start items-center -mt-5 lg:mt-0 lg:items-start flex-col gap-4">
            <h4 className="uppercase opacity-0 pointer-events-none select-none text-nightBlue font-medium mb-2 text-[17px]">
              CATEGORIES
            </h4>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Lifiestyle
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Photography & Video
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px]  text-dusk font-normal capitalize"
            >
              Health & Fitness
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Music
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              UX Design
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Seo
            </a>
          </div>
          <div className="flex justify-start items-center lg:items-start flex-col gap-4">
            <h4 className="uppercase  text-nightBlue font-medium mb-2 text-[17px]">
              SUPPORT
            </h4>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Documentation
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal uppercase"
            >
              FAQS
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px]  text-dusk font-normal capitalize"
            >
              Dashboard
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[15px] text-dusk font-normal capitalize"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper border-t border-solid border-[#EDEDED] py-[40px]">
        <div className="contain md:flex-row flex-col justify-between items-center gap-6 sm:gap-4">
          <p className="text-dusk text-[13px]">
            © 2022 Educrat. All Right Reserved.
          </p>
          <div className="flex justify-start sm:flex-row flex-col items-center gap-4 sm:gap-5">
            <a
              href="#"
              target={"blank"}
              className="text-[13px] text-dusk font-normal capitalize"
            >
              Help
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[13px] text-dusk font-normal capitalize"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[13px] text-dusk font-normal capitalize"
            >
              Security
            </a>
            <a
              href="#"
              target={"blank"}
              className="text-[13px] text-dusk font-normal capitalize"
            >
              Terms of Use
            </a>
            <div className="flex cursor-pointer text-dusk justify-center items-center gap-3 rounded-full bg-[#F7F8FB] h-[50px] px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="text-[13px]">English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
