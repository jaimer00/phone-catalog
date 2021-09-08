import Phone from "./Phone";

const Phones = ({ phones, updateClick }) => {

    return (
        <div>
            {phones.map((phone) => (
                <Phone key={phone.id} phone={phone} updateClick={updateClick} />
            ))}
        </div>
    )
}

export default Phones;
