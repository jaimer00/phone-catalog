
const Phone = ({ phone, updateClick, updateID }) => {
    
    return (
        <div className='phoneBlock'>
            <img alt='phone-img' src={phone.imageFileName} ></img>
            <h3>{phone.name}</h3>
            <button onClick={() => {updateClick(true, phone.id);}}>Details</button>
        </div>
    )
}

export default Phone;
