import * as React from 'react';
import { Form } from './Form';
import { Field } from './Field';
//import 'https://source.zoom.us/1.7.9/lib/vendor/react.min.js';


export const FormZoom: React.SFC = () => {
	return (
		<Form
			action="#"
			render={() => (
				<React.Fragment>
					<div className="alert alert-info" role="alert">
						Estamos apenas testando...
					</div>
					<Field id="display_name" label="Seu nome" />
					<Field id="meeting_number" label="Número da sala" />
					<Field id="meeting_pwd" label="Senha" />
					<Field id="meeting_email" label="Email" />

					<Field id="meeting_role" label="Tipo Acesso" editor="dropdown" options={[ '0', '1', '5' ]} />

					<Field id="meeting_china" label="China ou Mundo" editor="dropdown" options={[ '0', '1' ]} />

					<Field id="meeting_lang" label="Linguagem" editor="dropdown" options={[ 'pt-PT', 'en-US' ]} />

					<input type="hidden" value="" id="copy_link_value" />

					{/* <Field id="notes" label="Notes" editor="multilinetextbox" /> */}
				</React.Fragment>
			)}
		/>
	);
};
