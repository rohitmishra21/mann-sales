import React from 'react'

const Arow = ({username}) => {
  return (
    <div>
         <div className="leading-none flex justify-between items-center relative">
          <h1 className="text-[7vw] tracking-tighter font-extralight mt-9 ">
            {username}
          </h1>
          <svg
            className="w-40 h-11"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 115 56"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "8%",
              height: "10%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: " visible",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_132">
                <rect width="115" height="56" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_132)">
              <g
                transform="matrix(1,0,0,1,101.11100006103516,14)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-14,-14 C-14,1.4609999656677246 -1.4609999656677246,14 14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,101.11100006103516,42)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M14,-14 C-1.4609999656677246,-14 -14,-1.4609999656677246 -14,14"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,57.555999755859375,28)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(248,241,222)"
                    strokeOpacity="1"
                    strokeWidth="3"
                    d=" M-57.555999755859375,0 C-57.555999755859375,0 57.555999755859375,0 57.555999755859375,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-32 h-3 bg-[#171616] absolute right-32 hover:right-16">
          </div>
        </div>
    </div>
  )
}

export default Arow