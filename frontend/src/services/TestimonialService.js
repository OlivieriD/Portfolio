import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = 'testimonials';

export const TestimonialService = {
    // Public: only gets approved ones
    getApproved: () => axiosInstance.get(`${SUBDOMAIN}/public`),
    // Admin: gets all for moderation
    getAll: () => axiosInstance.get(SUBDOMAIN),
    create: (data) => axiosInstance.post(SUBDOMAIN, data),
    update: (id, data) => axiosInstance.patch(`${SUBDOMAIN}/${id}/approve?status=${data.approvalStatus}`),
    updateStatus: (id, status) => axiosInstance.patch(`${SUBDOMAIN}/${id}/approve?status=${status}`),
    delete: (id) => axiosInstance.delete(`${SUBDOMAIN}/${id}`),
};