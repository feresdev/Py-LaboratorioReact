import React from 'react';

function Table({ data, columns }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td key={column.key}>{row[column.key]}</td>
                        ))}
                        <button onClick={() => alert("Soy el " + row.name)}>Seleccionar</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
