export const GeneralTasksList = ({ tasks }) => {
    console.log(tasks);
    return (
        <section>
            <div>
                <ul>
                    {
                        tasks.map(({ id, title, deadline }) =>
                            <li key={id}>
                                <p>{deadline}</p>
                                <p>{title}</p>
                                <button>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
};

export default GeneralTasksList;