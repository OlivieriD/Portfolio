import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminTable = ({ headers, data, onEdit, onDelete, type }) => {
    const { t } = useTranslation();
    
    const getHeaderLabel = (headerKey) => {
        // Map header keys to translation keys
        const headerMap = {
            'titleEn': 'admin_col_title',
            'titleFr': 'admin_col_title',
            'technologies': 'admin_col_technologies',
            'name': 'admin_col_name',
            'proficiency': 'admin_col_proficiency',
            'category': 'admin_col_category',
            'company': 'admin_col_company',
            'roleEn': 'admin_col_role',
            'roleFr': 'admin_col_role',
            'startDate': 'admin_col_start_date',
            'endDate': 'admin_col_end_date',
            'schoolEn': 'admin_col_school',
            'schoolFr': 'admin_col_school',
            'degreeEn': 'admin_col_degree',
            'degreeFr': 'admin_col_degree',
            'nameEn': 'admin_col_name',
            'nameFr': 'admin_col_name',
            'authorName': 'admin_col_author',
            'content': 'admin_col_content',
            'approvalStatus': 'testimonial_status',
            'senderName': 'admin_col_sender_name',
            'senderEmail': 'admin_col_sender_email',
            'subject': 'admin_col_subject',
            'sentAt': 'admin_col_sent_at',
        };
        
        const translationKey = headerMap[headerKey];
        return translationKey ? t(translationKey) : headerKey.replace(/([A-Z])/g, ' $1').trim();
    };
    
    const formatValue = (value, headerKey) => {
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        
        // Handle testimonial approval status
        if (headerKey === 'approvalStatus') {
            switch(value) {
                case 'APPROVED':
                    return '✓ ' + t('testimonial_status_yes');
                case 'REFUSED':
                    return '✗ ' + t('testimonial_status_refused');
                case 'PENDING':
                default:
                    return '⏳ ' + t('testimonial_status_pending');
            }
        }
        
        if (typeof value === 'boolean') {
            return value ? '✓ ' + t('admin_app_yes') : '✗ ' + t('admin_app_no');
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
                            <th key={h}>{getHeaderLabel(h)}</th>
                        ))}
                        <th>{t('admin_table_actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {headers.map(h => (
                                <td key={h}>{formatValue(item[h], h)}</td>
                            ))}
                            <td className="actions-cell">
                                {type === 'testimonials' ? (
                                    <button onClick={() => onEdit(item)} className="edit-btn">
                                        {t('testimonial_approve_btn')}
                                    </button>
                                ) : (
                                    onEdit && (
                                        <button onClick={() => onEdit(item)} className="edit-btn">
                                            {t('admin_table_edit')}
                                        </button>
                                    )
                                )}
                                <button onClick={() => onDelete(item.id)} className="delete-btn">
                                    {t('admin_table_delete')}
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