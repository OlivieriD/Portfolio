import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProjectService } from '../../services/ProjectService';
import { SkillService } from '../../services/SkillService';
import { ExperienceService } from '../../services/ExperienceService';
import { EducationService } from '../../services/EducationService';
import { HobbyService } from '../../services/HobbyService';
import { TestimonialService } from '../../services/TestimonialService';
import { ContactService } from '../../services/ContactService';
import AdminTable from '../../components/admin/AdminTable';
import AdminModal from '../../components/admin/AdminModal';
import ApprovalModal from '../../components/admin/ApprovalModal';
import ConfirmModal from '../../components/common/ConfirmModal';
import AppManagement from './AppManagement';
import AboutManagement from '../../components/admin/AboutManagement';
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });
  const [approvalModal, setApprovalModal] = useState({ show: false, item: null });

  const getCurrentTab = () => {
    const path = location.pathname.split('/admin/')[1];
    return path || 'app-management';
  };

  const activeTab = getCurrentTab();

  useEffect(() => {
    if (activeTab !== 'app-management') {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const getService = () => {
    const services = {
      projects: ProjectService,
      skills: SkillService,
      experiences: ExperienceService,
      education: EducationService,
      hobbies: HobbyService,
      testimonials: TestimonialService,
      contacts: ContactService,
    };
    return services[activeTab];
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getService().getAll();
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
    setLoading(false);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    if (activeTab === 'testimonials') {
      setApprovalModal({ show: true, item });
    } else {
      setEditingItem(item);
      setShowModal(true);
    }
  };

  const handleApprove = async (testimonial) => {
    try {
      await TestimonialService.updateStatus(testimonial.id, 'APPROVED');
      setApprovalModal({ show: false, item: null });
      fetchData();
    } catch (err) {
      console.error('Error approving testimonial:', err);
      alert(t('admin_form_error'));
    }
  };

  const handleReject = async (testimonial) => {
    try {
      await TestimonialService.updateStatus(testimonial.id, 'REFUSED');
      setApprovalModal({ show: false, item: null });
      fetchData();
    } catch (err) {
      console.error('Error rejecting testimonial:', err);
      alert(t('admin_form_error'));
    }
  };

  const handlePending = async (testimonial) => {
    try {
      await TestimonialService.updateStatus(testimonial.id, 'PENDING');
      setApprovalModal({ show: false, item: null });
      fetchData();
    } catch (err) {
      console.error('Error setting testimonial to pending:', err);
      alert(t('admin_form_error'));
    }
  };

  const handleSave = async (formData) => {
    try {
      const service = getService();
      if (editingItem) {
        await service.update(editingItem.id, formData);
      } else {
        await service.create(formData);
      }
      setShowModal(false);
      setEditingItem(null);
      fetchData();
    } catch (err) {
      console.error('Error saving:', err);
      alert(t('admin_form_error'));
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirm({ show: true, id });
  };

  const confirmDelete = async () => {
    try {
      await getService().delete(deleteConfirm.id);
      setDeleteConfirm({ show: false, id: null });
      fetchData();
    } catch (err) {
      console.error('Error deleting:', err);
      alert(t('admin_form_error'));
      setDeleteConfirm({ show: false, id: null });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, id: null });
  };

  const getTableHeaders = () => {
    const headers = {
      projects: ['titleEn', 'titleFr', 'technologies'],
      skills: ['name', 'proficiency', 'category'],
      experiences: ['company', 'roleEn', 'startDate', 'endDate'],
      education: ['schoolEn', 'degreeEn', 'startDate', 'endDate'],
      hobbies: ['nameEn', 'nameFr', 'iconUrl'],
      testimonials: ['authorName', 'content', 'approvalStatus'],
      contacts: ['senderName', 'senderEmail', 'subject', 'sentAt'],
    };
    return headers[activeTab] || [];
  };

  const tabs = [
    { key: 'app-management', label: t('admin_app_management') },
    { key: 'about', label: t('admin_about_section') },
    { key: 'projects', label: t('admin_projects') },
    { key: 'skills', label: t('admin_skills') },
    { key: 'experiences', label: t('admin_experiences') },
    { key: 'education', label: t('admin_education') },
    { key: 'hobbies', label: t('admin_hobbies') },
    { key: 'testimonials', label: t('admin_testimonials') },
    { key: 'contacts', label: t('admin_contacts') },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-title">{t('admin_title')}</div>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''}
            onClick={() => navigate(`/admin/${tab.key}`)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      <Routes>
        <Route path="app-management" element={<AppManagement />} />
        <Route path="about" element={<AboutManagement />} />
        <Route
          path=":section"
          element={
            <main className="content">
              <div className="content-header">
                <div>
                  <h1 className="content-title">
                    {t('admin_title')} - {tabs.find((tab) => tab.key === activeTab)?.label}
                  </h1>
                  <p className="content-subtitle">
                    {activeTab === 'contacts' ? t('admin_contacts') : t('admin_subtitle')}
                  </p>
                </div>
                {activeTab !== 'contacts' && (
                  <button className="pastel-button" onClick={handleAdd}>
                    {t('admin_add_new')}
                  </button>
                )}
              </div>

              {loading ? (
                <div className="loading-state">{t('admin_loading')}</div>
              ) : items.length === 0 ? (
                <div className="empty-state">
                  <p>{t('admin_empty_state')}</p>
                </div>
              ) : (
                <AdminTable
                  type={activeTab}
                  headers={getTableHeaders()}
                  data={items}
                  onDelete={handleDelete}
                  onEdit={activeTab !== 'contacts' ? handleEdit : undefined}
                />
              )}

              {showModal && activeTab !== 'contacts' && (
                <AdminModal
                  type={activeTab}
                  item={editingItem}
                  onSave={handleSave}
                  onClose={() => {
                    setShowModal(false);
                    setEditingItem(null);
                  }}
                />
              )}

              {approvalModal.show && (
                <ApprovalModal
                  isOpen={approvalModal.show}
                  testimonial={approvalModal.item}
                  onApprove={() => handleApprove(approvalModal.item)}
                  onReject={() => handleReject(approvalModal.item)}
                  onPending={() => handlePending(approvalModal.item)}
                  onClose={() => setApprovalModal({ show: false, item: null })}
                />
              )}
            </main>
          }
        />
        <Route path="" element={<AppManagement />} />
      </Routes>

      {deleteConfirm.show && (
        <ConfirmModal
          title={t('admin_confirm_delete')}
          message={t('admin_delete_message')}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          confirmText={t('admin_delete_btn')}
          cancelText={t('admin_cancel_btn')}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
