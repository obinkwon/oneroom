import React, { useState, useEffect } from "react";


const createData = (name, count) => {
    return { name, count};
}

const ManageTable = (props) => {
    const headerMeta = [
        "이름",
        "갯수",
        "상태",
        "key",
    ];

    const RowData = [
        createData('휴지',12),
        createData('치약',12),
        createData('물',12),
        createData('휴지2',12),
        createData('치약2',12),
        createData('물2',12),
        createData('휴지3',12),
        createData('치약3',12),
        createData('물3',12),
        createData('휴지4',12),
    ];

    return (
        <div>
            {RowData.length !== 0 && (
            <table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                <tr>
                   {headerMeta.map(i=><th>{i}</th>)}
                </tr>
                </thead>
                <tbody>
                {RowData.map((row,key) => (
                    <tr key={key}>
                        <td>{row.name}</td>
                        <td>{row.count}</td>
                        <td>{(row.count > 0)? "있음":"없음"}</td>
                        <td>{key}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
    );
}

export default ManageTable;