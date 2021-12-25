import React, { useRef, useEffect } from 'react';

import { mount as marketingApp } from 'marketing/MarketingApp';

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		marketingApp(ref.current);
	}, []);

	return <div ref={ref} />;
};
