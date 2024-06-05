import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <ScrollTrigger
                onEnter={() => {
                    setCounterOn(true);
                    setCount(count + 1);
                }}
                onExit={() => setCounterOn(false)}
            >
                <div className="container-fluid px-5 mt-5">
                    <div className="row bg-info">
                        <div className="col-md-3 my-5">
                            <div>
                                <h1 className="text-dark ms-5 ps-3">
                                    <span className="counter-value">
                                        {counterOn && (
                                            <CountUp start={0} end={52243} duration={2} delay={0} />
                                        )}
                                    </span>
                                    <span style={{ fontSize: "20px" }}>+</span>
                                </h1>
                                <p className="text-dark d-flex justify-content-center align-item-center">
                                    NUMBER OF PEOPLE VISITS APP
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="counter"></div>
                </div>
            </ScrollTrigger>
           
            
        </>
    );
};

export default Counter;
