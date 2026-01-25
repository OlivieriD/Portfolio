import React from 'react';

const AdminTable = ({ headers, data, onEdit, onDelete, type }) => {
    const formatValue = (value) => {
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        if (typeof value === 'boolean') {
            return value ? '✓ Yes' : '✗ No';
        }
        if (value === null || value === undefined || value === '') {
            return '-';
        }
        if (typeof value === 'string' && value.length > 50) {
            return value.substring(0, 50) + '...';
        }
        return String(value);
    };

    return (
        <div className="admin-table-container">
            <table className="pastel-table">
                <thead>
                    <tr>
                        {headers.map(h => (
                            <th key={h}>{h.replace(/([A-Z])/g, ' $1').trim()}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {headers.map(h => (
                                <td key={h}>{formatValue(item[h])}</td>
                            ))}
                            <td className="actions-cell">
                                {onEdit && (
                                    <button onClick={() => onEdit(item)} className="edit-btn">
                                        Edit
                                    </button>
                                )}
                                <button onClick={() => onDelete(item.id)} className="delete-btn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;