

const CheckBoxField = ({ tags, onChange, ...props }) => {

    return (
        <div className="field is-grouped">
            {tags.map(tag => (
                <div className="control" key={tag}>
                    <label className="checkbox">{tag}{" "}
                        <input type="checkbox"
                            {...props}
                            onChange={
                                onChange}
                        />

                    </label>
                </div>
            )
            )}

        </div>
    )
}

export default CheckBoxField
