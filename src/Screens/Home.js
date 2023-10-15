import React  from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import useMediaQuery from '../Constants/useMediaQuery'
import { images } from '../Assets/image';
import { colors } from '../Assets/theme';
import Footer from '../Component/Footer';
export default function Home() {
  const mobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <>
      <div style={{
        display: "flex",
        backgroundColor: "black",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#BD1461",
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            height: "15vh",
            justifyContent: "center",
            alignItems: "center",
            // paddingHorizontal: 15,
            width: "30%",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: 65, // 4.4 equivalent to 32
              textAlign: "center",
              fontFamily: "LEMONMILK-MEDIUM",
              letterSpacing: 1,
            }}
          >
            HOMEATZ
          </p>
        </div>
        <p
          style={{
            fontSize: 24, // 1.9 equivalent to 14
            textAlign: "center",
            fontFamily: "BalsamiqSans-Bold",
            color: "#CBB26A",
          }}
        >
          Home Food By Home Chefs
        </p>
        <button
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("section1").offsetTop,
              behavior: "smooth",
            });
          }}
          style={{
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: 0,
            fontSize: 22, // 1.9 equivalent to 14
            textAlign: "center",
            fontFamily: "BalsamiqSans-Bold",
            color: "#CBB26A",
            paddingBlock: 20,
            cursor: "pointer",
          }}
        >
          Download the app now!
        </button>
      </div>
      <div 
      id={"section1"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        backgroundColor: colors.white,
      }}>
        {
          mobile ? null :
            <LazyLoadComponent>
              <img src={images.app}
                alt="Group-1"
                style={{
                  width: "55%",
                  height: "50%",
                }} />
            </LazyLoadComponent>
        }
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: mobile ? "center" : "flex-start",
          width: mobile ? "100%" : "45%",
          height: "40vh",
        }}>
          <p style={{
            marginBlock: 0,
            color: colors.darkGrey,
            fontSize: mobile ? 30 : 45,
            textAlign: 'center',
            fontFamily: "BalsamiqSans-Bold",
            marginRight: 10,
          }}>
            Get the HOMEATZ App
          </p>
          <p style={{
            marginBlock: 0,
            color: colors.darkGrey,
            fontSize: 18,
            textAlign: 'center',
            fontFamily: "BalsamiqSans-Regular",
            marginRight: 10,
          }}>
            We will send you a link, open it on your phone to download the app
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            width: '80%',
            marginLeft: 10,
          }}>
            <input
              style={{
                width: '80%',
                height: 45,
                border: "1px solid #d0d0d0",
                outline: 'none',
                fontSize: 16,
                textAlign: 'left',
                fontFamily: "BalsamiqSans-Regular",
                borderRadius: 8,
                paddingLeft: 10,
              }}
              placeholder='Email Address'
            />
            <p style={{
              marginBlock: 0,
              color: colors.white,
              fontSize: 18,
              textAlign: 'center',
              fontFamily: "BalsamiqSans-Regular",
              marginLeft: 10,
              backgroundColor: colors.iconColor,
              padding: 12,
              borderRadius: 8,
            }}>
              Share
            </p>
          </div>
          <p style={{
            marginBlock: 0,
            color: "GrayText",
            fontSize: 18,
            textAlign: 'left',
            fontFamily: "BalsamiqSans-Regular",
            marginLeft: 10,
            marginTop: 20,
          }}>
            Download app from
          </p>
          <LazyLoadComponent>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "ButtonText",
                height: 40,
                paddingInline: 10,
                borderRadius: 8,
                marginInline: 20,
                // width: 100
              }}>
                <img src={images.playstore} alt="playstore" style={{ width: 30, height: 30 }} />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                  <p style={{
                    marginBlock: 0,
                    color: colors.white,
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Regular",
                    marginLeft: 10,
                  }}>
                    Get it on
                  </p>
                  <p style={{
                    marginBlock: 0,
                    color: colors.white,
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Regular",
                    marginLeft: 10,
                  }}>
                    Playstore
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "ButtonText",
                height: 40,
                paddingInline: 10,
                borderRadius: 8,
                // width: 100
              }}>
                <img src={images.appstore} alt="playstore" style={{ width: 30, height: 30 }} />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                  <p style={{
                    marginBlock: 0,
                    color: colors.white,
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Regular",
                    marginLeft: 10,
                  }}>
                    Get it on
                  </p>
                  <p style={{
                    marginBlock: 0,
                    color: colors.white,
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Regular",
                    marginLeft: 10,
                  }}>
                    Appstore
                  </p>
                </div>
              </div>
            </div>
          </LazyLoadComponent>
        </div>
      </div>
      <Footer/>
    </>
  )
}
