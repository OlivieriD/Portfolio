import React, { useState, useEffect } from 'react';
import { ProjectService } from '../../services/ProjectService';
import { TestimonialService } from '../../services/TestimonialService';
import AdminTable from '../../components/admin/AdminTable';
import '../../styles/Admin.css';

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
                <button onClick={() => setActiveTab('projects')}>Projects</button>
                <button onClick={() => setActiveTab('testimonials')}>Testimonials</button>
                <button onClick={() => setActiveTab('messages')}>Messages</button>
            </aside>

            <main className="content">
                <h1>Managing {activeTab.toUpperCase()}</h1>
                <button className="add-new-btn">+ Add New</button>

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