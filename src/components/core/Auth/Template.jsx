// import { FcGoogle } from "react-icons/fc"
// import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
//           <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//               {title}
//             </h1>
//             <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
//               <span className="text-richblack-100">{description1}</span>{" "}
//               <span className="font-edu-sa font-bold italic text-blue-100">
//                 {description2}
//               </span>
//             </p>
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//           </div>
//           <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <img
//               src={frameImg}
//               alt="Pattern"
//               width={558}
//               height={504}
//               loading="lazy"
//             />
//             <img
//               src={image}
//               alt="Students"
//               width={558}
//               height={504}
//               loading="lazy"
//               className="absolute -top-4 right-4 z-10"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Template

import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)
  const formRef     = useRef(null)
  const imgRef      = useRef(null)

  useEffect(() => {
    setTimeout(() => formRef.current?.classList.add("tpl-f-on"), 60)
    setTimeout(() => imgRef.current?.classList.add("tpl-i-on"),  180)
  }, [])

  return (
    <>
      <style>{`
        @keyframes blob-s {
          0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.5;}
          50%{transform:translate(-50%,-50%) scale(1.1);opacity:0.75;}
        }
        .tpl-blob{
          position:absolute;border-radius:50%;pointer-events:none;
          filter:blur(90px);animation:blob-s 9s ease-in-out infinite;
        }
        .tpl-grid{
          position:absolute;inset:0;
          background-image:
            linear-gradient(rgba(6,182,212,0.035) 1px,transparent 1px),
            linear-gradient(90deg,rgba(6,182,212,0.035) 1px,transparent 1px);
          background-size:52px 52px;pointer-events:none;
          mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%);
        }

        /* form slide in */
        .tpl-f{ opacity:0; transform:translateX(-22px);
          transition:opacity 0.6s cubic-bezier(0.34,1.1,0.64,1),transform 0.6s cubic-bezier(0.34,1.1,0.64,1);}
        .tpl-f-on{opacity:1;transform:none;}

        /* image slide in */
        .tpl-i{ opacity:0; transform:translateX(22px);
          transition:opacity 0.6s cubic-bezier(0.34,1.1,0.64,1),transform 0.6s cubic-bezier(0.34,1.1,0.64,1);}
        .tpl-i-on{opacity:1;transform:none;}

        /* card */
        .tpl-card{
          background:rgba(13,18,36,0.7);
          backdrop-filter:blur(20px);
          border:1px solid rgba(6,182,212,0.14);
          border-radius:20px;
          position:relative;overflow:hidden;
          box-shadow:0 0 0 0.5px rgba(6,182,212,0.07), 0 24px 60px rgba(0,0,0,0.55);
          transition:border-color 0.3s,box-shadow 0.3s;
        }
        .tpl-card::before{
          content:"";position:absolute;top:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(6,182,212,0.5),rgba(168,85,247,0.3),transparent);
        }
        .tpl-card:hover{
          border-color:rgba(6,182,212,0.25);
          box-shadow:0 0 0 0.5px rgba(6,182,212,0.12),0 24px 60px rgba(0,0,0,0.6),0 0 40px rgba(6,182,212,0.06);
        }

        /* title gradient */
        .tpl-title{
          background:linear-gradient(135deg,#fff 0%,#a5f3fc 50%,#c084fc 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }
        .tpl-div{
          height:1px;margin:18px 0;
          background:linear-gradient(90deg,transparent,rgba(6,182,212,0.22),rgba(168,85,247,0.15),transparent);
        }

        /* float & glow for image */
        @keyframes img-fl{0%,100%{transform:translateY(0);}50%{transform:translateY(-9px);}}
        .img-float{animation:img-fl 6s ease-in-out infinite;}
        .img-glow{
          filter:drop-shadow(0 0 32px rgba(6,182,212,0.18)) drop-shadow(0 16px 40px rgba(0,0,0,0.45));
          transition:filter 0.3s;
        }
        .img-glow:hover{filter:drop-shadow(0 0 50px rgba(6,182,212,0.28)) drop-shadow(0 0 30px rgba(168,85,247,0.15));}

        /* floating stat chips */
        .stat-chip{
          position:absolute;
          background:rgba(6,10,24,0.93);
          backdrop-filter:blur(14px);
          border:1px solid rgba(6,182,212,0.2);
          border-radius:12px;padding:10px 14px;
          box-shadow:0 8px 28px rgba(0,0,0,0.5), 0 0 16px rgba(6,182,212,0.07);
          z-index:20;
        }

        /* spinner */
        @keyframes sp{to{transform:rotate(360deg);}}
        .tpl-spin{
          width:40px;height:40px;
          border:3px solid rgba(6,182,212,0.12);
          border-top-color:#06b6d4;
          border-radius:50%;animation:sp 0.8s linear infinite;
        }

        /* badge */
        .tpl-badge{
          display:inline-flex;align-items:center;gap:5px;
          padding:3px 12px;border-radius:999px;
          background:rgba(6,182,212,0.07);
          border:1px solid rgba(6,182,212,0.18);
          color:#22d3ee;font-size:11px;font-weight:600;
          letter-spacing:0.7px;text-transform:uppercase;
        }
      `}</style>

      <div style={{
        minHeight:"calc(100vh - 62px)",
        background:"#000814",
        position:"relative", overflow:"hidden",
        display:"flex", alignItems:"center",
      }}>
        {/* blobs */}
        <div className="tpl-blob" style={{
          width:"550px",height:"550px",
          background:"radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 70%)",
          top:"45%",left:"28%",
        }}/>
        <div className="tpl-blob" style={{
          width:"380px",height:"380px",
          background:"radial-gradient(circle,rgba(168,85,247,0.08) 0%,transparent 70%)",
          top:"25%",right:"18%",left:"auto",
          animationDelay:"5s",
        }}/>
        <div className="tpl-grid"/>

        {loading ? (
          <div style={{ width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"14px",padding:"60px" }}>
            <div className="tpl-spin"/>
            <span style={{ color:"rgba(255,255,255,0.25)",fontSize:"13px" }}>Loading...</span>
          </div>
        ) : (
          <div style={{
            maxWidth:"1260px", margin:"0 auto",
            padding:"32px 28px",          /* compact padding */
            width:"100%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            gap:"48px",
            flexWrap:"wrap",
          }}>

            {/* ── FORM ── */}
            <div ref={formRef} className="tpl-f" style={{
              flex:"1", minWidth:"min(100%,380px)", maxWidth:"440px",
            }}>
              <div className="tpl-card" style={{ padding:"32px" }}>
                <div className="tpl-badge" style={{ marginBottom:"16px" }}>
                  ✦ {formType==="signup" ? "Create Account" : "Welcome Back"}
                </div>

                <h1 className="tpl-title" style={{
                  fontSize:"clamp(20px,2.6vw,26px)", fontWeight:800,
                  lineHeight:1.25, letterSpacing:"-0.02em", margin:"0 0 10px",
                }}>
                  {title}
                </h1>

                <p style={{ fontSize:"14px", lineHeight:"1.6", margin:"0" }}>
                  <span style={{ color:"rgba(175,178,191,0.7)" }}>{description1}</span>{" "}
                  <span style={{
                    fontStyle:"italic", fontWeight:600,
                    background:"linear-gradient(135deg,#22d3ee,#a855f7)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                    fontFamily:"Edu SA Beginner,cursive",
                  }}>{description2}</span>
                </p>

                <div className="tpl-div"/>

                {formType==="signup" ? <SignupForm /> : <LoginForm />}
              </div>
            </div>

            {/* ── IMAGE ── */}
            <div ref={imgRef} className="tpl-i" style={{
              flex:"1", minWidth:"min(100%,340px)", maxWidth:"480px",
              position:"relative", display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <div style={{
                position:"absolute", inset:"-20px", borderRadius:"50%",
                background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)",
                filter:"blur(18px)", pointerEvents:"none",
              }}/>

              <div style={{ position:"relative" }} className="img-float">
                <img src={frameImg} alt="Pattern" width={460} height={415} loading="lazy"
                  style={{ opacity:0.3, filter:"hue-rotate(185deg) brightness(0.6) saturate(1.8)" }} />
                <img src={image} alt="Students" width={460} height={415} loading="lazy"
                  className="img-glow"
                  style={{ position:"absolute", top:"-14px", right:"14px", zIndex:10, borderRadius:"14px" }} />

                {/* rating chip */}
                <div className="stat-chip img-float" style={{
                  top:"28px", left:"-24px",
                  display:"flex", alignItems:"center", gap:"8px",
                  animationDelay:"2s",
                }}>
                  <span style={{ fontSize:"16px" }}>⭐</span>
                  <div>
                    <div style={{ color:"#F1F2FF", fontSize:"13px", fontWeight:700 }}>4.9/5</div>
                    <div style={{ color:"rgba(175,178,191,0.45)", fontSize:"10px" }}>Top Rated</div>
                  </div>
                </div>

                {/* students chip */}
                <div className="stat-chip img-float" style={{
                  bottom:"22px", left:"-18px",
                  animationDelay:"1s",
                }}>
                  <div style={{
                    fontSize:"18px", fontWeight:800,
                    background:"linear-gradient(135deg,#22d3ee,#a855f7)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>5K+</div>
                  <div style={{ color:"rgba(175,178,191,0.5)", fontSize:"10px", marginTop:"1px" }}>
                    Active Students
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  )
}

export default Template

