import React from 'react';
import desk from '../public/desktop.png';
import '../styles/desktop.css';
export default function Desktop() {
	return (
		<div className='app'>
			<div className='desktop-main'>
				<img className='img-desktop' src={desk} alt='' />
			</div>
		</div>
	);
}
