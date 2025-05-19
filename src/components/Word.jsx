export default function Word (props){
    return (
        <>
            <section>
                <ul className="word">
                    {props.word}
                </ul>
            </section>
        </>
    )
}