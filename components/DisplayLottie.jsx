import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("react-lottie"), { 
	ssr: false,
	loading: () => <div style={{ height: "200px" }}>Loading...</div>
});

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
