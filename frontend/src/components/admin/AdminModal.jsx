import React, { useState, useEffect } from 'react';
import '../../styles/AdminModal.css';
import { useTranslation } from 'react-i18next';
import { sanitizeObjectStrings } from '../../utils/sanitize';

const AdminModal = ({ type, item, onSave, onClose }) => {
    const [formData, setFormData] = useState({});
    const { t } = useTranslation();

    const initializeForm = () => {
        const forms = {
            projects: {
                titleEn: '', titleFr: '', descriptionEn: '', descriptionFr: '',
                imageUrl: '', githubLink: '', liveLink: '', technologies: []
            },
            skills: { name: '', proficiency: 0, category: '' },
            experiences: {
                company: '', roleEn: '', roleFr: '', descriptionEn: '', descriptionFr: '',
                startDate: '', endDate: '', location: ''
            },
            education: {
                schoolEn: '', schoolFr: '', degreeEn: '', degreeFr: '',
                fieldOfStudyEn: '', fieldOfStudyFr: '', startDate: '', endDate: '', gpa: ''
            },
            hobbies: {
                nameEn: '', nameFr: '', descriptionEn: '', descriptionFr: '', iconUrl: ''
            },
            testimonials: { authorName: '', content: '' }
        };
        setFormData(forms[type] || {});
    };

    useEffect(() => {
        if (item) {
            setFormData(item);
        } else {
            initializeForm();
        }
    }, [item, type]);

    const handleChange = (e) => {
        const { name, value, type: inputType, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: inputType === 'checkbox' ? checked : value
        }));
    };

    const handleTechChange = (e) => {
        const techs = e.target.value.split(',').map(t => t.trim()).filter(t => t);
        setFormData(prev => ({ ...prev, technologies: techs }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const safeData = sanitizeObjectStrings(formData);
        onSave(safeData);
    };

    const renderFields = () => {
        switch (type) {
            case 'projects':
                return (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_title_en')} {t('admin_form_required')}</label>
                                <input name="titleEn" value={formData.titleEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_title_fr')} {t('admin_form_required')}</label>
                                <input name="titleFr" value={formData.titleFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_description_en')} {t('admin_form_required')}</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="3" />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_description_fr')} {t('admin_form_required')}</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="3" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_image_url')}</label>
                            <input name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} placeholder="https://..." />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_github_link')}</label>
                                <input name="githubLink" value={formData.githubLink || ''} onChange={handleChange} placeholder="https://github.com/..." />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_live_link')}</label>
                                <input name="liveLink" value={formData.liveLink || ''} onChange={handleChange} placeholder="https://..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_technologies')}</label>
                            <input 
                                value={formData.technologies?.join(', ') || ''} 
                                onChange={handleTechChange} 
                                placeholder="React, Spring Boot, PostgreSQL" 
                            />
                        </div>
                    </>
                );
            
            case 'skills':
                return (
                    <>
                        <div className="form-group">
                            <label>{t('admin_form_skill_name')} {t('admin_form_required')}</label>
                            <input name="name" value={formData.name || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_proficiency')} {t('admin_form_required')}</label>
                                <input name="proficiency" type="number" min="0" max="100" value={formData.proficiency || 0} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_category')} {t('admin_form_required')}</label>
                                <select name="category" value={formData.category || ''} onChange={handleChange} required>
                                    <option value="">{t('admin_form_select')}</option>
                                    <option value="Frontend">{t('admin_form_category_frontend')}</option>
                                    <option value="Backend">{t('admin_form_category_backend')}</option>
                                    <option value="Database">{t('admin_form_category_database')}</option>
                                    <option value="DevOps">{t('admin_form_category_devops')}</option>
                                    <option value="Tools">{t('admin_form_category_tools')}</option>
                                </select>
                            </div>
                        </div>
                    </>
                );
            
            case 'experiences':
                return (
                    <>
                        <div className="form-group">
                            <label>{t('admin_form_company')} {t('admin_form_required')}</label>
                            <input name="company" value={formData.company || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_role_en')} {t('admin_form_required')}</label>
                                <input name="roleEn" value={formData.roleEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_role_fr')} {t('admin_form_required')}</label>
                                <input name="roleFr" value={formData.roleFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_description_en')} {t('admin_form_required')}</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="3" />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_description_fr')} {t('admin_form_required')}</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="3" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_start_date')} {t('admin_form_required')}</label>
                                <input name="startDate" type="date" value={formData.startDate || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_end_date')}</label>
                                <input name="endDate" type="date" value={formData.endDate || ''} onChange={handleChange} />
                                <small>{t('admin_form_current_position')}</small>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_location')}</label>
                            <input name="location" value={formData.location || ''} onChange={handleChange} placeholder="City, Country" />
                        </div>
                    </>
                );
            
            case 'education':
                return (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_school_en')} {t('admin_form_required')}</label>
                                <input name="schoolEn" value={formData.schoolEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_school_fr')} {t('admin_form_required')}</label>
                                <input name="schoolFr" value={formData.schoolFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_degree_en')} {t('admin_form_required')}</label>
                                <input name="degreeEn" value={formData.degreeEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_degree_fr')} {t('admin_form_required')}</label>
                                <input name="degreeFr" value={formData.degreeFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_field_of_study_en')}</label>
                                <input name="fieldOfStudyEn" value={formData.fieldOfStudyEn || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_field_of_study_fr')}</label>
                                <input name="fieldOfStudyFr" value={formData.fieldOfStudyFr || ''} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_start_date')} {t('admin_form_required')}</label>
                                <input name="startDate" type="date" value={formData.startDate || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_end_date')} {t('admin_form_required')}</label>
                                <input name="endDate" type="date" value={formData.endDate || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_gpa')}</label>
                            <input name="gpa" type="number" step="0.01" min="0" max="4" value={formData.gpa || ''} onChange={handleChange} placeholder="3.8" />
                        </div>
                    </>
                );
            
            case 'hobbies':
                return (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_name_en')} {t('admin_form_required')}</label>
                                <input name="nameEn" value={formData.nameEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_name_fr')} {t('admin_form_required')}</label>
                                <input name="nameFr" value={formData.nameFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t('admin_form_description_en')} {t('admin_form_required')}</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="2" />
                            </div>
                            <div className="form-group">
                                <label>{t('admin_form_description_fr')} {t('admin_form_required')}</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="2" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_icon')}</label>
                            <input name="iconUrl" value={formData.iconUrl || ''} onChange={handleChange} placeholder="Icon or https://..." />
                        </div>
                    </>
                );
            
            case 'testimonials':
                return (
                    <>
                        <div className="form-group">
                            <label>{t('admin_form_author_name')} {t('admin_form_required')}</label>
                            <input name="authorName" value={formData.authorName || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>{t('admin_form_content')} {t('admin_form_required')}</label>
                            <textarea name="content" value={formData.content || ''} onChange={handleChange} required rows="4" />
                        </div>
                    </>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{item ? t('admin_edit_modal_title') : t('admin_add_modal_title')} {type.slice(0, -1)}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                    {renderFields()}
                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>{t('admin_cancel_btn')}</button>
                        <button type="submit" className="save-btn">{t('admin_save_btn')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminModal;
