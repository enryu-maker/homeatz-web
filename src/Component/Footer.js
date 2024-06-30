import React from 'react'
import { colors } from '../Assets/theme'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { images } from '../Assets/image'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import useMediaQuery from '../Constants/useMediaQuery'
export default function Footer() {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#80808030",
            width: '100vw',
            paddingBlock: 20,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: mobile ? "column" : 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: mobile ? "95vw" : '70vw',
                height: 70,
            }}>
                <Link
                    to={'/'}
                    style={{
                        marginBlock: 0,
                        color: colors.iconColor,
                        fontSize: 25,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontFamily: "LEMONMILK-Bold",
                        textDecoration: 'none',
                    }}>
                    HOMEATZ.
                </Link>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: mobile ? "column" : 'row',
                justifyContent: mobile ? 'flex-start' : 'space-evenly',
                alignItems: 'flex-start',
                // width: mobile ? "65vw" : '70vw',
                flexWrap: "wrap",
                height: mobile ? "50vh" : "auto",
                paddingBlockEnd: 20,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    // padding:mobile?0 : 20,
                }}>
                    <p style={{
                        color: colors.darkGrey,
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: "LEMONMILK-Bold",
                    }}>
                        About
                    </p>
                    <Link
                        to={'/who-we-are'}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                            textDecoration: 'none',
                        }}>
                        Who we are
                    </Link>
                    <Link
                        to={'/report-fraud'}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                        }}>
                        Report Fraud
                    </Link>
                    <Link
                        to={"/contact-us"}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            textDecoration: 'none',
                            fontFamily: "BalsamiqSans-Regular",
                        }}>
                        Contact us
                    </Link>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: colors.darkGrey,
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: "LEMONMILK-Bold",
                    }}>
                        Learn More
                    </p>
                    <Link
                        to={"/terms-and-conditions"}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                            textDecoration: 'none',
                        }}>
                        Terms & Conditions
                    </Link>
                    <Link
                        to={"/privacy-policy"}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                            textDecoration: 'none',
                        }}>
                        Privacy Policy
                    </Link>
                    <Link
                        to={"/refund"}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                            textDecoration: 'none',
                        }}>
                        Refund & Cancellation Policy
                    </Link>
                    <Link
                        to={"/shipping"}
                        style={{
                            marginBlock: 2,
                            color: "GrayText",
                            fontSize: 18,
                            textAlign: 'center',
                            fontFamily: "BalsamiqSans-Regular",
                            textDecoration: 'none',
                        }}>
                        Shipping and Delivery policy
                    </Link>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: colors.darkGrey,
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: "LEMONMILK-Bold",
                    }}>
                        Social
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%',
                        wordSpacing: 10
                    }}>
                        <FaYoutube
                            style={{
                                cursor: 'pointer',
                            }}
                            size={20} color={colors.darkGrey}
                            onClick={() => window.open('www.youtube.com/@HOMEATZ.GLOBAL', '_blank')}
                        />
                        <FaFacebook
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://www.facebook.com/homeatz', '_blank')}
                            size={20} color={colors.darkGrey} />
                        <FaInstagram
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://www.instagram.com/homeatz/', '_blank')}
                            size={20} color={colors.darkGrey} />
                        <FaXTwitter
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://twitter.com/HomeatzIn', '_blank')}
                            size={20} color={colors.darkGrey} />
                        <FaLinkedin
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://www.linkedin.com/company/74707582/admin/feed/posts/', '_blank')}
                            size={20} color={colors.darkGrey} />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: colors.darkGrey,
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: "LEMONMILK-Bold",
                    }}>
                        Download
                    </p>
                    <LazyLoadComponent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <a
                                href='https://apps.apple.com/in/app/homeatz-global/id6499072490'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: "ButtonText",
                                    textDecoration: "none",
                                    paddingInline: 7,
                                    height: 40,
                                    borderRadius: 8,
                                    marginBlockEnd: 10,
                                    // width: 100
                                }}>
                                <img
                                    src={images.appstore} alt="appstore" style={{ width: 30, height: 30 }} />
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
                                    paddingInline: 7,
                                    borderRadius: 8,
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
                            </a>
                        </div>
                    </LazyLoadComponent>
                </div>

            </div>
            <div style={{
                border: `1px dotted GrayText`,
                width: mobile ? "95vw" : '70vw',
            }} />
            <p style={{
                color: "GrayText",
                fontSize: 16,
                textAlign: 'left',
                fontFamily: "BalsamiqSans-Regular",
                width: mobile ? "95vw" : '70vw',
            }}>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023 © HOMEATZ Ltd. All rights reserved.
            </p>
            <img
                onClick={() => window.open('https://nerdtech.in/', '_blank')}
                src={images.NT}
                alt="NT"
                style={{
                    width: mobile ? "100vw" : "40vw",
                    cursor: 'pointer',
                }}
            />
        </div>
    )
}