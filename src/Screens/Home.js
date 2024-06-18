
import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import useMediaQuery from '../Constants/useMediaQuery'
import { images } from '../Assets/image';
import { colors } from '../Assets/theme';
import Footer from '../Component/Footer';
import { Helmet } from "react-helmet";
import Counter from '../Component/Counter';

export default function Home() {
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Homeatz - Where Home Chefs Delight Your Palate</title>
        <meta name="description" content="Discover a world of homemade culinary delights at Homeatz. Connect with talented home chefs, explore a variety of cuisines, and savor the flavors of your local community. Order now!" />
      </Helmet>
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
            // backgroundColor: "#BD1461",
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            Height: mobile ? "15vh" : "15vh",
            maxHeight: mobile ? "15vh" : "15vh",
            justifyContent: "center",
            alignItems: "center",
            width: mobile ? "90%" : "45%",
            minWidth: mobile ? "100%" : "45%",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: mobile ? 50 : 65,
              textAlign: "center",
              fontFamily: "LEMONMILK-MEDIUM",
              letterSpacing: 1,
              backgroundColor: "#BD1461",
              borderTopLeftRadius: 40,
              borderBottomRightRadius: 40,
              padding:10,
              paddingInline:30,
            }}
          >
            HOMEATZ
          </p>
        </div>
        <p
          style={{
            fontSize: 24,
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
            fontSize: 22,
            textAlign: "center",
            fontFamily: "BalsamiqSans-Bold",
            color: "#CBB26A",
            paddingBlock: 20,
            cursor: "pointer",
          }}
        >
          <Counter/>
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
          height:"100%",
          minHeight: "100%",
          alignSelf: "center",
          backgroundColor: colors.white,
        }}>
        {
          mobile ? null :
            <LazyLoadComponent>
              <img src={images.app}
                alt="Group-1"
                style={{
                  width: "50%",
                  height: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  marginLeft: -40
                }} />
            </LazyLoadComponent>
        }
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: mobile ? "center" : "flex-start",
          width: mobile ? "100%" : "45%",
          paddingBlock: mobile ? 40 : 10,
        }}>
          <p style={{
            marginBlock: 0,
            color: colors.darkGrey,
            fontSize: mobile ? 30 : 45,
            textAlign: 'center',
            fontFamily: "BalsamiqSans-Bold",
            marginRight: 10,
          }}>
            HOMEATZ APP
          </p>
          <p style={{
            marginBlock: 0,
            color: colors.darkGrey,
            fontSize: 18,
            textAlign: 'justify',
            fontFamily: "BalsamiqSans-Regular",
            marginRight: 10,
          }}>
            At Homeatz, we blend innovation with tradition to revolutionize the way you experience home-cooked meals. Our passion lies in creating culinary solutions that bring the essence of homemade goodness right to your kitchen.
            <br />
            <br />

            Founded on the belief that nothing can replace the warmth and flavor of ghar ka khana, Homeatz is committed to crafting cutting-edge food technology that simplifies cooking without compromising on taste or nutrition.
            <br />
            <br />

            From smart kitchen appliances to intuitive cooking aids, each Homeatz product is designed to empower you to create delicious dishes with ease and efficiency. Our tagline,<span style={{
              color: colors.logoPink,
              fontFamily: "BalsamiqSans-Bold",

            }}> "Swad se bhara, pyaar se bana, ghar ka khana, ghar mai hi!"</span> encapsulates our dedication to delivering authentic flavors, made with love, right in the comfort of your home.
            <br />
            <br />

            Join us on a journey where culinary tradition meets modern convenience, making every mealtime a celebration of home. Welcome to Homeatz – where home-cooked goodness knows no bounds.
          </p>
          <p style={{
            marginBlock: 0,
            color: "black",
            fontSize: 24,
            textAlign: 'left',
            fontFamily: "BalsamiqSans-Bold",
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
              <a
                href='https://play.google.com/store/apps/details?id=com.eatzapp'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "ButtonText",
                  textDecoration: "none",
                  height: 40,
                  paddingInline: 10,
                  borderRadius: 8,
                  marginInline: 20,
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
              </a>
              <a
                href='https://apps.apple.com/in/app/homeatz-global/id6499072490'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "ButtonText",
                  textDecoration: "none",
                  height: 40,
                  paddingInline: 10,
                  borderRadius: 8,
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
              </a>
            </div>
          </LazyLoadComponent>
        </div>
      </div>
      <div style={{
        display: "flex",
        backgroundColor: "black",
        height: mobile ? "auto" : "60vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: mobile ? 20 : 0,
      }}>
        <p style={{
          marginBlock: 0,
          color: colors.logoPink,
          fontSize: mobile ? 20 : 30,
          textAlign: 'center',
          fontFamily: "BalsamiqSans-Bold",
          marginRight: 10,
        }}>
          SEE HOW OUR APP WORKS
        </p>
        <p style={{
          marginBlock: 0,
          color: colors.white,
          fontSize: mobile ? 25 : 35,
          textAlign: 'center',
          fontFamily: "BalsamiqSans-Regular",
          marginRight: 10,
        }}>
          We love what we do, check out <br />
          some of our Tutorials
        </p>
        <div style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          justifyContent: "space-evenly",
          width: mobile ? "100%" : "88%",
          alignItems: "center",
          marginTop: mobile ? 20 : 0,
        }}>
          <iframe width="320" height="192" src="https://www.youtube.com/embed/5MzoNtUljm0?si=eOI23rEabHN0VnMu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="320" height="192" src="https://www.youtube.com/embed/vwhH_GXiL0w?si=zC6ZdwqoT9wisxLz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

