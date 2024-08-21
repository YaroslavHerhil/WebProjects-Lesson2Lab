import { useState } from 'react';


export default function CounterButton(props) {
    const [clicks, setClicks] = useState(0);

    const handleButtonClick = () => {
			props.onClicksChanged();
			setClicks(clicks + 1)
	
	}

    return (
        <div>
            <button onClick={handleButtonClick}>
                Clicks:{clicks}
            </button>
        </div>
    )
}
