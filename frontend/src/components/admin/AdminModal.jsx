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
            testimonials: { authorName: '', content: '', approved: false }
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
                                <label>Title (EN) *</label>
                                <input name="titleEn" value={formData.titleEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Title (FR) *</label>
                                <input name="titleFr" value={formData.titleFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Description (EN) *</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="3" />
                            </div>
                            <div className="form-group">
                                <label>Description (FR) *</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="3" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} placeholder="https://..." />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>GitHub Link</label>
                                <input name="githubLink" value={formData.githubLink || ''} onChange={handleChange} placeholder="https://github.com/..." />
                            </div>
                            <div className="form-group">
                                <label>Live Link</label>
                                <input name="liveLink" value={formData.liveLink || ''} onChange={handleChange} placeholder="https://..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Technologies (comma-separated)</label>
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
                            <label>Skill Name *</label>
                            <input name="name" value={formData.name || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Proficiency (0-100) *</label>
                                <input name="proficiency" type="number" min="0" max="100" value={formData.proficiency || 0} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Category *</label>
                                <select name="category" value={formData.category || ''} onChange={handleChange} required>
                                    <option value="">Select...</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Database">Database</option>
                                    <option value="DevOps">DevOps</option>
                                    <option value="Tools">Tools</option>
                                </select>
                            </div>
                        </div>
                    </>
                );
            
            case 'experiences':
                return (
                    <>
                        <div className="form-group">
                            <label>Company *</label>
                            <input name="company" value={formData.company || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Role (EN) *</label>
                                <input name="roleEn" value={formData.roleEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Role (FR) *</label>
                                <input name="roleFr" value={formData.roleFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Description (EN) *</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="3" />
                            </div>
                            <div className="form-group">
                                <label>Description (FR) *</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="3" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Start Date *</label>
                                <input name="startDate" type="date" value={formData.startDate || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <input name="endDate" type="date" value={formData.endDate || ''} onChange={handleChange} />
                                <small>Leave empty if current position</small>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input name="location" value={formData.location || ''} onChange={handleChange} placeholder="City, Country" />
                        </div>
                    </>
                );
            
            case 'education':
                return (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>School (EN) *</label>
                                <input name="schoolEn" value={formData.schoolEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>School (FR) *</label>
                                <input name="schoolFr" value={formData.schoolFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Degree (EN) *</label>
                                <input name="degreeEn" value={formData.degreeEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Degree (FR) *</label>
                                <input name="degreeFr" value={formData.degreeFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Field of Study (EN)</label>
                                <input name="fieldOfStudyEn" value={formData.fieldOfStudyEn || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Field of Study (FR)</label>
                                <input name="fieldOfStudyFr" value={formData.fieldOfStudyFr || ''} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Start Date *</label>
                                <input name="startDate" type="date" value={formData.startDate || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>End Date *</label>
                                <input name="endDate" type="date" value={formData.endDate || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>GPA</label>
                            <input name="gpa" type="number" step="0.01" min="0" max="4" value={formData.gpa || ''} onChange={handleChange} placeholder="3.8" />
                        </div>
                    </>
                );
            
            case 'hobbies':
                return (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name (EN) *</label>
                                <input name="nameEn" value={formData.nameEn || ''} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Name (FR) *</label>
                                <input name="nameFr" value={formData.nameFr || ''} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Description (EN) *</label>
                                <textarea name="descriptionEn" value={formData.descriptionEn || ''} onChange={handleChange} required rows="2" />
                            </div>
                            <div className="form-group">
                                <label>Description (FR) *</label>
                                <textarea name="descriptionFr" value={formData.descriptionFr || ''} onChange={handleChange} required rows="2" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Icon</label>
                            <input name="iconUrl" value={formData.iconUrl || ''} onChange={handleChange} placeholder="Icon or https://..." />
                        </div>
                    </>
                );
            
            case 'testimonials':
                return (
                    <>
                        <div className="form-group">
                            <label>Author Name *</label>
                            <input name="authorName" value={formData.authorName || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Content *</label>
                            <textarea name="content" value={formData.content || ''} onChange={handleChange} required rows="4" />
                        </div>
                        <div className="form-group">
                            <label className="checkbox-label">
                                <input 
                                    name="approved" 
                                    type="checkbox" 
                                    checked={formData.approved || false} 
                                    onChange={handleChange} 
                                />
                                Approved
                            </label>
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
