

export default function Questions({question}){

    return(

        <div>

            <h4>{question.question}</h4>

            {question.options.map((option) => (
                <button className="btn btn-option" key={option}>
                    {option}
                </button>
            ))}
        </div>
    )
}