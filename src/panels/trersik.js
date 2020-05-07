import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();
var hzhz= new Array();
for(let i = 0;i < 10;i++){
    hzhz[i] = Math.random()*50;   
}
const Trersik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Ветрина ваших адоптов
		</PanelHeader>
        <div className="Trersik">
		<img className="Picture" src={persik} alt="Persik The Cat"/>
        <h2 className="Price">{(Math.floor(Math.random()*10+8))} руб</h2>
        </div>
        <div className="Trersik">
		<img className="Picture" src={persik} alt="Persik The Cat"/>
        <h2 className="Price">{(Math.floor(Math.random()*10+8))} руб</h2>
        </div>
        <div className="Trersik">
		<img className="Picture" src={persik} alt="Persik The Cat"/>
        <h2 className="Price">{(Math.floor(Math.random()*10+8))} руб</h2>
        </div>
        <div className="Trersik">
		<img className="Picture" src={persik} alt="Persik The Cat"/>
        <h2 className="Price">{(Math.floor(Math.random()*10+8))} руб</h2>
        </div>
	</Panel>
);

Trersik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Trersik;