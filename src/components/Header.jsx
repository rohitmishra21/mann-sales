import React, { useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { gsap } from "gsap";
// import photo from "../assets/photo.png";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(".loader h1", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
    }).to(".loader h1", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div className="xl:min-h-screen xl:w-full w-full relative bg-[#F8F1DE] text-[#171616]">
        <nav className="xl:flex xl:justify-between  xl:p-12  xl:py-11 flex justify-between px-6 py-4 ">
          <div className="right">
            <img
              src="https://cdn.prod.website-files.com/640b08832e1854b37663877e/640b0a5e3c13566e0bb0017b_logo.svg"
              alt=""
              className="sm:hidden xl:block hidden"
            />
            <img 
            src="https://cdn.prod.website-files.com/640a960b97b40fb62f5ad213/641750125070924218aad35d_msc-dark.svg" 
            alt=""
            className="xl:hidden"
            />
            
          </div>
          <div className="left xl:h-14 flex">
            <h1 className="xl:text-white xl:bg-black xl:px-4  xl:py-4 xl:rounded-full xl:mr-4 xl:hover:bg-white xl:hover:xl:text-black xl:hover:border-2 xl:border-black text-white bg-black rounded-full py-2 px-2">
              <HiBars3 size={22} />
            </h1>
            <h1 className="hidden xl:block xl:px-12 xl:py-4 xl:rounded-full  xl:bg-[#FE784B] xl:text-white xl:uppercase xl:font-sans  xl:font-bold  xl:hover:bg-white xl:hover:xl:text-[#FE784B] xl:hover:border-2 xl:border-[#FE784B] ">
              let's talk
            </h1>
          </div>
        </nav>
        <header className=" w-full relative">
          <div className="xl:flex xl:flex-col xl:justify-between xl:items-center">
            <div className=" xl:flex xl:justify-center xl:gap-9 xl:h-80 flex flex-col px-6 xl:flex-row mt-10">
              <h1 className="loader hidden xl:block  h xl:text-[14vw] text-[14vw] xl:leading-2 xl:text-center xl:tracking-tighter xl:font-light">
                We
              </h1>
              <h1 className=" h hidden xl:block xl:text-[14vw] text-[14vw]  xl:leading-2 xl:text-center xl:tracking-tighter xl:font-light">
                make
              </h1>
              <h1 className="xl:hidden text-[14vw]">We make</h1>
              <h1 className="xl:hidden text-[14vw]">boring things</h1>
              <h1 className="xl:hidden text-[14vw]">interesting</h1>

              <h1 className=" h text-[14vw] xl:leading-2 xl:text-center xl:tracking-tighter xl:font-light">
                <div className="xl:block hidden">
                  <div className="xl:flex xl:items-center ">
          
                    <h1 className="xl:mr-24">b</h1>
                    <div className="xl:absolute xl:right-[270px] xl:block hidden ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 139 125"
                        width="400"
                        height="400"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          contentVisibility: "visible",
                        }}
                      >
                        <defs>
                          <clipPath id="__lottie_element_87">
                            <rect width="200" height="200" x="0" y="0"></rect>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#__lottie_element_87)">
                          <g
                            transform="matrix(0.5,-0.8660253882408142,0.8660253882408142,0.5,54.951194763183594,40.09722900390625)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(255,100,50)"
                                fillOpacity="1"
                                d=" M1.3899999856948853,0.4830000102519989 C1.0420000553131104,0.7829999923706055 0.7049999833106995,1.093999981880188 0.36500000953674316,1.4019999504089355 C0.36500000953674316,1.4019999504089355 0.3610000014305115,1.4019999504089355 0.3610000014305115,1.4019999504089355 C0.2919999957084656,1.3569999933242798 0.2240000069141388,1.3170000314712524 0.1550000011920929,1.2769999504089355 C0.2680000066757202,0.8320000171661377 0.3779999911785126,0.38100001215934753 0.4909999966621399,-0.06400000303983688 C0.8840000033378601,-1.6109999418258667 1.2760000228881836,-3.1579999923706055 1.6690000295639038,-4.704999923706055 C1.8029999732971191,-5.2270002365112305 1.7100000381469727,-5.672999858856201 1.1430000066757202,-5.85099983215332 C0.6449999809265137,-6.008999824523926 0.2919999957084656,-5.709000110626221 0.09799999743700027,-5.300000190734863 C-0.08399999886751175,-4.914999961853027 -0.16599999368190765,-4.48199987411499 -0.28299999237060547,-4.068999767303467 C-0.6759999990463257,-2.6559998989105225 -1.059999942779541,-1.2380000352859497 -1.465000033378601,0.17100000381469727 C-1.5379999876022339,0.4259999990463257 -1.687999963760376,0.6570000052452087 -1.9110000133514404,1.13100004196167 C-2.1010000705718994,0.5070000290870667 -2.2070000171661377,0.15000000596046448 -2.3239998817443848,-0.20600000023841858 C-2.562999963760376,-0.9350000023841858 -2.882999897003174,-1.194000005722046 -3.384999990463257,-1.0520000457763672 C-3.9800000190734863,-0.8820000290870667 -4.057000160217285,-0.3919999897480011 -3.9560000896453857,0.09000000357627869 C-3.631999969482422,1.652999997138977 -3.3359999656677246,3.2279999256134033 -2.88700008392334,4.750999927520752 C-2.4820001125335693,6.119999885559082 -1.6230000257492065,6.242000102996826 -0.6029999852180481,5.209000110626221 C0.6729999780654907,3.9210000038146973 1.9559999704360962,2.6419999599456787 3.2360000610351562,1.3580000400543213 C3.4179999828338623,1.1759999990463257 3.61299991607666,0.9980000257492065 3.763000011444092,0.7910000085830688 C4.046000003814697,0.4020000100135803 4.0980000495910645,-0.010999999940395355 3.746000051498413,-0.3880000114440918 C3.4019999504089355,-0.7519999742507935 2.9769999980926514,-0.8009999990463257 2.5759999752044678,-0.5130000114440918 C2.1589999198913574,-0.21299999952316284 1.7790000438690186,0.14300000667572021 1.3899999856948853,0.4830000102519989z"
                              ></path>
                            </g>
                          </g>
                          <g
                            transform="matrix(0.5,-0.8660253882408142,0.8660253882408142,0.5,68.77958679199219,34.48891067504883)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(255,100,50)"
                                fillOpacity="1"
                                d=" M0.7149999737739563,2.246999979019165 C0.009999999776482582,2.1050000190734863 -0.6899999976158142,1.972000002861023 -1.3949999809265137,1.8339999914169312 C-1.3949999809265137,1.8339999914169312 -1.3910000324249268,1.8380000591278076 -1.3910000324249268,1.8380000591278076 C-1.402999997138977,1.7450000047683716 -1.4199999570846558,1.6549999713897705 -1.4359999895095825,1.562000036239624 C-1.1649999618530273,1.3639999628067017 -0.8930000066757202,1.1610000133514404 -0.6179999709129333,0.9710000157356262 C1.1519999504089355,-0.25600001215934753 2.9130001068115234,-1.4869999885559082 4.698999881744385,-2.694000005722046 C5.1529998779296875,-2.997999906539917 5.427999973297119,-3.3420000076293945 5.1570000648498535,-3.859999895095825 C4.886000156402588,-4.377999782562256 4.388000011444092,-4.366000175476074 3.9140000343322754,-4.191999912261963 C3.6389999389648438,-4.091000080108643 3.3949999809265137,-3.8959999084472656 3.1440000534057617,-3.7300000190734863 C1.7790000438690186,-2.8269999027252197 0.4189999997615814,-1.9160000085830688 -0.949999988079071,-1.0210000276565552 C-1.1690000295639038,-0.8830000162124634 -1.4279999732971191,-0.8019999861717224 -1.8370000123977661,-0.6200000047683716 C-1.5579999685287476,-1.3530000448226929 -1.375,-1.8760000467300415 -1.1640000343322754,-2.385999917984009 C-0.953000009059906,-2.8959999084472656 -1.0149999856948853,-3.3499999046325684 -1.5210000276565552,-3.6010000705718994 C-2.055999994277954,-3.868000030517578 -2.440000057220459,-3.5480000972747803 -2.683000087738037,-3.0940001010894775 C-3.4730000495910645,-1.6160000562667847 -4.2779998779296875,-0.1420000046491623 -5.006999969482422,1.3680000305175781 C-5.590000152587891,2.571000099182129 -5.169000148773193,3.252000093460083 -3.865000009536743,3.450000047683716 C-2.3340001106262207,3.684999942779541 -0.8119999766349792,3.9560000896453857 0.718999981880188,4.198999881744385 C1.100000023841858,4.260000228881836 1.4880000352859497,4.300000190734863 1.8730000257492065,4.300000190734863 C2.371000051498413,4.303999900817871 2.686000108718872,4.0289998054504395 2.750999927520752,3.5350000858306885 C2.815999984741211,3.0369999408721924 2.558000087738037,2.693000078201294 2.0999999046325684,2.5510001182556152 C1.6510000228881836,2.4130001068115234 1.180999994277954,2.3399999141693115 0.7149999737739563,2.246999979019165z"
                              ></path>
                            </g>
                          </g>
                          <g
                            transform="matrix(0.5,-0.8660253882408142,0.8660253882408142,0.5,83.67736053466797,42.08102798461914)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(255,100,50)"
                                fillOpacity="1"
                                d=" M-1.2940000295639038,2.009999990463257 C-1.5290000438690186,1.3179999589920044 -1.784000039100647,0.6330000162124634 -2.111999988555908,-0.27399998903274536 C-2.111999988555908,-0.27399998903274536 -2.1040000915527344,-0.28200000524520874 -2.1040000915527344,-0.28200000524520874 C-1.6339999437332153,-0.1889999955892563 -1.378999948501587,-0.18400000035762787 -1.156000018119812,-0.09099999815225601 C0.07500000298023224,0.4189999997615814 1.2979999780654907,0.949999988079071 2.5290000438690186,1.4639999866485596 C2.88100004196167,1.6139999628067017 3.246000051498413,1.7960000038146973 3.614000082015991,1.812000036239624 C3.8529999256134033,1.8200000524520874 4.214000225067139,1.6059999465942383 4.315000057220459,1.3949999809265137 C4.420000076293945,1.1759999990463257 4.355000019073486,0.7879999876022339 4.2129998207092285,0.5690000057220459 C4.063000202178955,0.33799999952316284 3.75600004196167,0.18400000035762787 3.493000030517578,0.05000000074505806 C2.493000030517578,-0.4560000002384186 1.4800000190734863,-0.9340000152587891 0.47999998927116394,-1.4359999895095825 C0.2939999997615814,-1.5329999923706055 0.14000000059604645,-1.6950000524520874 -0.17599999904632568,-1.9459999799728394 C0.7269999980926514,-2.0269999504089355 1.4149999618530273,-2.0429999828338623 2.0869998931884766,-2.1689999103546143 C2.5490000247955322,-2.253999948501587 2.9059998989105225,-2.625999927520752 2.747999906539917,-3.1040000915527344 C2.6470000743865967,-3.4000000953674316 2.2699999809265137,-3.6389999389648438 1.9700000286102295,-3.825000047683716 C1.812000036239624,-3.921999931335449 1.5449999570846558,-3.872999906539917 1.3339999914169312,-3.8450000286102295 C-0.11599999666213989,-3.6470000743865967 -1.5729999542236328,-3.493000030517578 -3.006999969482422,-3.2049999237060547 C-4.197999954223633,-2.9660000801086426 -4.63100004196167,-2.009999990463257 -4.210000038146973,-0.8360000252723694 C-3.7769999504089355,0.382999986410141 -3.3299999237060547,1.593000054359436 -2.884999990463257,2.808000087738037 C-2.7960000038146973,3.0510001182556152 -2.747999906539917,3.371000051498413 -2.569999933242798,3.500999927520752 C-2.2869999408721924,3.7079999446868896 -1.9049999713897705,3.9010000228881836 -1.5770000219345093,3.88100004196167 C-1.11899995803833,3.8570001125335693 -0.9779999852180481,3.4159998893737793 -1.0269999504089355,3.003000020980835 C-1.0670000314712524,2.6670000553131104 -1.184999942779541,2.3340001106262207 -1.2940000295639038,2.009999990463257z"
                              ></path>
                            </g>
                          </g>
                          <g
                            transform="matrix(0.10000000149011612,0,0,0.10000000149011612,168,62.5)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                stroke="rgb(255,99,49)"
                                strokeOpacity="1"
                                strokeWidth="25"
                                d=" M-1079,37 C-1079,37 -1079,-39.5 -1014,-95.5 C-959.4769897460938,-142.4739990234375 -922,-123 -903,-80 C-884,-37 -882,51 -901,110 C-920,169 -947.1060180664062,229.44000244140625 -1011,233.25 C-1065.5,236.5 -1119.7139892578125,151.20899963378906 -1120,65 C-1120.5,-85.5 -1025,-118.5 -1025,-118.5 C-1025,-118.5 -1011,-101.5 -1011,-101.5"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h1 className="xl:z-10">ring</h1>
                  </div>
                </div>
              </h1>
            </div>
            <div className="loader xl:flex  xl:justify-center  xl:gap-9 hidden">
              <h1 className="h xl:text-[14vw] xl:leading-3 xl:text-center xl:tracking-tighter xl:font-light">
                thing
              </h1>
              <h1 className="h xl:text-[14vw] xl:leading-3 xl:text-center xl:tracking-tighter xl:font-light">
                interesting
              </h1>
            </div>

            <h1 className=" xl:block hidden xl:text-center xl:text-xl xl:font-semibold mt-32 xl:font-sans">
              WELCOME TO THE BRANDING & PERSUASION COMPANY
            </h1>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
