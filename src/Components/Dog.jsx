import DogPage from "../Pages/DogPage";

function Dog(props){

    

    return (
        <>
        <h1>Click the button to see a dog!</h1>
        <button onClick={props.newDogPicture}>Dog Picture</button>
        <div>
            <img src={props.dogPicture} alt="Dog" />
        </div>
        </>
    )
}

export default Dog;