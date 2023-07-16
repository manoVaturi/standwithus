import React from 'react';

import { WhatsappShareButton, WhatsappIcon } from 'react-share';

export default function GetShareButtons({ accept_link, helpText }) {
	return (
		<div className='center'>
			<WhatsappShareButton url={accept_link} title={helpText}>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>
		</div>
	);
}
