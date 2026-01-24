import React, { useState, useEffect } from 'react';
import { ProjectService } from '../../services/ProjectService';
import { TestimonialService } from '../../services/TestimonialService';
import AdminTable from '../../components/admin/AdminTable';
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        let res;
        if (activeTab === 'projects') res = await ProjectService.getAll();
        if (activeTab === 'testimonials') res = await TestimonialService.getAll(); // Admin version
        setItems(res.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            if (activeTab === 'projects') await ProjectService.delete(id);
            fetchData(); // Refresh list
        }
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="sidebar-title">Admin Panel</div>
                <button 
                    className={activeTab === 'projects' ? 'active' : ''} 
                    onClick={() => setActiveTab('projects')}
                >
                    Projects
                </button>
                <button 
                    className={activeTab === 'testimonials' ? 'active' : ''} 
                    onClick={() => setActiveTab('testimonials')}
                >
                    Testimonials
                </button>
                <button 
                    className={activeTab === 'messages' ? 'active' : ''} 
                    onClick={() => setActiveTab('messages')}
                >
                    Messages
                </button>
            </aside>

            <main className="content">
                <div className="content-header">
                    <h1 className="content-title">Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                    <p className="content-subtitle">View and manage your {activeTab}</p>
                </div>

                <button className="pastel-button" style={{ marginBottom: '2rem', width: 'fit-content' }}>
                    + Add New
                </button>

                <AdminTable
                    type={activeTab}
                    headers={activeTab === 'projects' ? ['TitleEn', 'TitleFr'] : ['AuthorName', 'Approved']}
                    data={items}
                    onDelete={handleDelete}
                    onEdit={(item) => console.log("Edit logic here", item)}
                />
            </main>
        </div>
    );
};

export default AdminDashboard;