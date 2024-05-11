type LapsCircuitsProps = {
    array: Array<string>;
}

export const LapsCircuits = ({ array }: LapsCircuitsProps) => {

    return (
        <ul>
            {array.map((el, indexOf) => <li key={indexOf}>{indexOf + 1} - {el}</li>)}
        </ul>
    )
};
