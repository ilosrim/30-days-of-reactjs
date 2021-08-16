import React from 'react';

class Lesson2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'Google'},
                {id: 2, name: 'Facebook'},
                {id: 3, name: 'Amazon'},
                {id: 4, name: 'Twitter'},
            ]
        };
    }

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                    {
                    this.state.data.map((val, index)=>{
                        return <div>
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                            </tr>
                        </div>
                    })
                }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Lesson2;
