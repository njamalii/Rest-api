import './App.css'
export default function Card(props) {
    return (
        <div className="grid place-items-center bg-gray-300 p-6 shadow-lg rounded-lg border">
            <img src={props.img} className='w-100 h-50 justify-center rounded-lg' />
            <h4 className='text-center font-bold'>{props.item}</h4>
            <h3 className='text-center'>${props.price}</h3>
            <p className='text-center'>{props.content}</p>
        </div>
    );
}