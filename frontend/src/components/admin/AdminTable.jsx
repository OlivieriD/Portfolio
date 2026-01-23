import React from 'react';

const AdminTable = ({ headers, data, onEdit, onDelete, onApprove, type }) => {
    return (
        <div className="admin-table-container">
            <table className="pastel-table">
                <thead>
                <tr>
                    {headers.map(h => <th key={h}>{h}</th>)}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        {/* Dynamically render cells based on headers */}
                        {headers.map(h => <td key={h}>{String(item[h.toLowerCase()] || '')}</td>)}
                        <td className="actions-cell">
                            <button onClick={() => onEdit(item)} className="edit-btn">Edit</button>
                            <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
                            {/* Special Logic for Testimonials Subdomain */}
                            {type === 'testimonial' && !item.approved && (
                                <button onClick={() => onApprove(item.id, true)} className="approve-btn">Approve</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;