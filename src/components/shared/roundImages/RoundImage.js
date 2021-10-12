

const RoundImage = ({ className, src, children }) => {

    return (
        <div className="RoundImage" style={{ textAlign: "center" }} >
            <figure style={{ margin: "1em auto 0.4em auto" }} className="image is-48x48">
                <img className="is-rounded" src={src || "https://bulma.io/images/placeholders/128x128.png"} />
            </figure>
            {children &&
                <div >
                    {children}
                </div>}

        </div>

    )
}

export default RoundImage