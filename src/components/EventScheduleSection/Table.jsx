import React from "react";
import TableTr from './TableTr'


const Table = ({ data }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>№</td>
                    <td>Content</td>
                    <td>Speakers</td>
                    <td></td>
                </tr>

            </thead>
            <tbody>
                {
                    data && (
                        data.map((dataItem) => {
                            return (<TableTr dataItem={dataItem} key={dataItem.id}></TableTr>)
                        })
                    )
                }
            </tbody>
        </table>
    );
};

export default Table
