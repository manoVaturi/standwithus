import React from 'react';
import '../../styles/popup.css';
import GetShareButtons from '../Share';

const ResultSharePopup = ({ length, totalPoints, handleClose }) => {
	return (
		<div className='popup-box'>
			<div className='box'>
				<div>
					<img
						src='https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/vecteezy_doodle-style-infographics-concept-wit.png/:/rs=w:1440,h:1440'
						alt='logo'
					/>
				</div>

				<span className='res-title'>כל הכבוד! צדקת ב - </span>

				<span className='res-score'>
					{totalPoints}/{length}
				</span>

				<span className='res-text'>
					שאלות שנוגעות למדינת ישראל! מתאים לשם של הפרויקט, לא?
				</span>

				<span className='res-text'>
					לגמרי ישראליות ברמה גבוהה
					<span role='img' aria-label='emoji'>
						😉
					</span>
				</span>

				<div className='box-share'>
					<span className='res-share'>שתפו את התוצאה באמצעות:</span>
					<GetShareButtons
						accept_link='http://israelihighlevel.com/'
						helpText={`רק רציתי לספר לעולם שצדקתי ב - ${totalPoints}/${length}
שאלות שנוגעות למדינת ישראל! מתאים לשם של הפרויקט, לא? לגמרי ישראליות ברמה גבוהה 😉`}
					/>
				</div>
				<button className='box-btn-next' onClick={handleClose}>
					<span className='box-btn-text-next'>סגור</span>
				</button>
			</div>
		</div>
	);
};

export default ResultSharePopup;
