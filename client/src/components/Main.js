import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
	useEffect(() => {
		getQuestions();
	}, []);

	const getQuestions = () => {
		fetch(window.env.REACT_APP_API_HOSTNAME + '/questions')
			.then((res) => res.json())

			.catch((err) => console.log(err));
	};

	return (
		<div className='app'>
			<div className='popup-box'>
				<div className='box'>
					<div className='box-content'>
						<h1 className='box-title'>
							היוש 🦄 ברוכות וברוכים הבאים, כיף שבאתם!
						</h1>
						<div className='box-text'>
							מכירות הצ'ייסר? מכירים אחד נגד מאה? אז זה כמו זה. רק בלי קהל. ובלי
							מנחה. ועם שאלות רק על ישראל. טוב, אז זה לא בדיוק כמו זה. לא משנה.
							אז מה זה כן? טריוויה (מחכימה🤓) אודות ישראל, שבכל השתתפות אפשר
							להכנס להגרלה ולזכות בפרסים שווים! ולמה כל הטוב הזה קורה? מדובר
							בפרויקט התנדבותי, שהוא חלק מתוכנית הסברה ישראלית של ארגון
							StandWithUs. תנו בראש!
						</div>

						<img
							className='logo-img'
							src='https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/logo-c350b0f.png/:/rs=w:1440,h:1440'
							alt=''
						/>

						<button className='start-btn'>
							<Link className='text-btn' to={'quiz'}>
								יאללה בוא נתחיל!
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
