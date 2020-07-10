import * as React from 'react';
import { Form } from './Form';
import { Field } from './Field';

export const FormZoom: React.SFC = () => {
	return (
		<Form
			action="http://localhost:4351/api/contactus"
			render={() => (
				<React.Fragment>
					<div className="alert alert-info" role="alert">
						Em caso de dúvidas vá a igreja.
					</div>
					<Field id="display_name" label="Seu nome" />
					<Field id="meeting_number" label="Número da sala" />
					<Field id="meeting_pwd" label="Senha" />
					<Field id="meeting_email" label="Email" />

					<Field id="meeting_role" label="Tipo Acesso" editor="dropdown" options={[ '0', '1', '5' ]} />

					<Field id="meeting_china" label="China ou Mundo" editor="dropdown" options={[ '0', '1' ]} />

					<Field id="meeting_china" label="China ou Mundo" editor="dropdown" options={[ '0', '1' ]} />

					<Field id="meeting_lang" label="Linguagem" editor="dropdown" options={[ 'pt-PT', 'en-US' ]} />

					{/* <Field id="notes" label="Notes" editor="multilinetextbox" /> */}
				</React.Fragment>
			)}
		/>
	);
};
