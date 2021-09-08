
function Popup(props) {

    const phone = props.phones.find(phone => phone.id === props.phoneID.currentPhoneID);

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-in'>
                <img alt='phone-img' src={phone.imageFileName} ></img>
                <p>Model: {phone.name}</p>
                <p>Manufacturer: {phone.manufacturer}</p>
                <p>Description: {phone.description}</p>
                <p>Color: {phone.color}</p>
                <p>Price: {phone.price}</p>
                <p>Screen: {phone.screen}</p>
                <p>Processor: {phone.processor}</p>
                <p>RAM: {phone.ram}</p>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup
