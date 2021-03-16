import React, {useState} from 'react'
import style from './termsConditions.css'
import EnTermsConditions from "./../En-terms/En-termsConditions";
import FrTermsConditions from "../Fr-terms/Fr-termsConditions";
import NlTermsConditions from "../Nl-terms/Nl-termsConditions";

const TermsConditions = () => {
	const [langueage, setLanguage] = useState('en')
	const optionChange = (evt: any) =>{
		setLanguage(evt.target.value)
	}
	return (
			<div className={style.listWrapper}>
				<div className={style.optionContainer}>
					<select className={style.langChooser} onChange={optionChange}>
						<option selected={true} disabled>Choose your language</option>
						<option value={'fr'}>French</option>
						<option value={'en'}>English</option>
						<option value={'nl'}>Dutch</option>
					</select>
				</div>
				{langueage === 'en' ? <EnTermsConditions/> : langueage === 'fr' ? <FrTermsConditions/> : <NlTermsConditions/>}

			</div>
	)
}



export default TermsConditions
