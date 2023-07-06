import Table from 'react-bootstrap/Table';

function MatchTable(props) {
    const dates=props.datesArray;
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>venue/Home team</th>
                    <th>Match</th>
                </tr>
            </thead>
            <tbody>
            {props.matches.map((match,index)=>(

            
                <tr>
                    <td>{index+1}</td>
                    <td>{dates[index]}</td>
                    <td>{match.split(" ")[0]}</td>
                    <td>{match}</td>
                </tr>
            )) }
            </tbody>
        </Table>
    );
}

export default MatchTable;